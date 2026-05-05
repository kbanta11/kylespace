#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const readline = require('readline');
const { URL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const LINKS_JSON = path.join(ROOT, 'src', 'data', 'links.json');
const ICON_DIR = path.join(ROOT, 'public', 'link-icons');
const ICON_PUBLIC_PREFIX = '/link-icons';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0 Safari/537.36';

function ask(rl, q) {
  return new Promise((resolve) => rl.question(q, (a) => resolve(a.trim())));
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'link';
}

function get(url, { redirects = 5, timeout = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const lib = u.protocol === 'http:' ? http : https;
    const req = lib.get(
      url,
      { headers: { 'User-Agent': UA, Accept: '*/*' }, timeout },
      (res) => {
        if (
          [301, 302, 303, 307, 308].includes(res.statusCode || 0) &&
          res.headers.location &&
          redirects > 0
        ) {
          const next = new URL(res.headers.location, url).toString();
          res.resume();
          resolve(get(next, { redirects: redirects - 1, timeout }));
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () =>
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            body: Buffer.concat(chunks),
            finalUrl: url,
          })
        );
      }
    );
    req.on('timeout', () => {
      req.destroy(new Error('timeout'));
    });
    req.on('error', reject);
  });
}

function findIconCandidates(html, baseUrl) {
  const candidates = [];
  // Match attributes in any order, single or double quotes
  const linkTagRe = /<link\b[^>]*>/gi;
  const ogImageRe = /<meta\b[^>]*property=["']og:image["'][^>]*>/gi;
  const twitterImgRe = /<meta\b[^>]*name=["']twitter:image["'][^>]*>/gi;

  function attr(tag, name) {
    const m = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, 'i'));
    return m ? m[1] : null;
  }

  function add(href, rank) {
    if (!href) return;
    try {
      const abs = new URL(href, baseUrl).toString();
      candidates.push({ url: abs, rank });
    } catch (_) {}
  }

  let m;
  while ((m = ogImageRe.exec(html))) add(attr(m[0], 'content'), 1);
  while ((m = twitterImgRe.exec(html))) add(attr(m[0], 'content'), 2);

  while ((m = linkTagRe.exec(html))) {
    const tag = m[0];
    const rel = (attr(tag, 'rel') || '').toLowerCase();
    const href = attr(tag, 'href');
    if (!href) continue;
    if (rel.includes('apple-touch-icon')) add(href, 3);
    else if (rel.includes('icon')) {
      const sizes = attr(tag, 'sizes') || '';
      const big = /(\d+)x\d+/.exec(sizes);
      const px = big ? parseInt(big[1], 10) : 0;
      add(href, 4 + (px >= 64 ? -0.5 : px >= 32 ? 0 : 0.5));
    }
  }

  candidates.sort((a, b) => a.rank - b.rank);
  return candidates.map((c) => c.url);
}

function extFromContentType(ct, fallbackUrl) {
  const map = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/gif': '.gif',
    'image/svg+xml': '.svg',
    'image/webp': '.webp',
    'image/x-icon': '.ico',
    'image/vnd.microsoft.icon': '.ico',
  };
  if (ct) {
    const base = ct.split(';')[0].trim().toLowerCase();
    if (map[base]) return map[base];
  }
  try {
    const u = new URL(fallbackUrl);
    const e = path.extname(u.pathname).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'].includes(e)) {
      return e === '.jpeg' ? '.jpg' : e;
    }
  } catch (_) {}
  return '.png';
}

async function tryDownload(url) {
  try {
    const res = await get(url);
    if (res.status !== 200 || !res.body || res.body.length < 64) return null;
    const ct = (res.headers['content-type'] || '').toLowerCase();
    if (!ct.startsWith('image/') && !url.endsWith('.ico')) return null;
    return { buffer: res.body, ext: extFromContentType(ct, url) };
  } catch (_) {
    return null;
  }
}

async function fetchBestIcon(targetUrl) {
  const u = new URL(targetUrl);
  const origin = `${u.protocol}//${u.host}`;
  let candidates = [];

  try {
    const res = await get(targetUrl);
    if (res.status === 200) {
      const html = res.body.toString('utf8');
      candidates = findIconCandidates(html, targetUrl);
    }
  } catch (_) {}

  // Always include common fallbacks at the end
  candidates.push(`${origin}/apple-touch-icon.png`);
  candidates.push(`${origin}/favicon.ico`);
  candidates.push(`https://www.google.com/s2/favicons?domain=${u.hostname}&sz=128`);

  const seen = new Set();
  for (const c of candidates) {
    if (seen.has(c)) continue;
    seen.add(c);
    process.stdout.write(`  · trying ${c.slice(0, 80)}${c.length > 80 ? '…' : ''} `);
    const result = await tryDownload(c);
    if (result) {
      console.log('✓');
      return { ...result, sourceUrl: c };
    }
    console.log('✗');
  }
  return null;
}

function parseArgs(argv) {
  // Supports: --name "X" --url "Y" [--description "Z"]
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--name') out.name = argv[++i];
    else if (a === '--url') out.url = argv[++i];
    else if (a === '--description' || a === '--desc') out.description = argv[++i];
    else if (a === '--help' || a === '-h') out.help = true;
  }
  return out;
}

function printHelp() {
  console.log(`
kylespace add-link

Interactive:   npm run add-link
Non-interactive: npm run add-link -- --name "GitHub" --url "https://github.com/kbanta11" [--description "code"]
`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  let name = args.name;
  let url = args.url;
  let description = args.description || '';

  if (!name || !url) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log('\n♡ kylespace — add a link ♡\n');
    if (!name) name = await ask(rl, 'Name: ');
    if (!url) url = await ask(rl, 'URL:  ');
    if (!description) description = await ask(rl, 'Description (optional, press enter to skip): ');
    rl.close();
  }

  if (!name) {
    console.error('Name required.');
    process.exit(1);
  }
  if (!url) {
    console.error('URL required.');
    process.exit(1);
  }
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

  // Validate URL
  let parsed;
  try {
    parsed = new URL(url);
  } catch (_) {
    console.error(`Invalid URL: ${url}`);
    process.exit(1);
  }

  console.log(`\nFetching icon for ${parsed.hostname}…`);
  const icon = await fetchBestIcon(url);

  let iconPublicPath;
  if (icon) {
    if (!fs.existsSync(ICON_DIR)) fs.mkdirSync(ICON_DIR, { recursive: true });
    const slugBase = slugify(name);
    let filename = `${slugBase}${icon.ext}`;
    let i = 2;
    while (fs.existsSync(path.join(ICON_DIR, filename))) {
      filename = `${slugBase}-${i}${icon.ext}`;
      i++;
    }
    fs.writeFileSync(path.join(ICON_DIR, filename), icon.buffer);
    iconPublicPath = `${ICON_PUBLIC_PREFIX}/${filename}`;
    console.log(`Saved icon → public${iconPublicPath}`);
  } else {
    console.log('No icon found — will fall back to Google favicon at render time.');
  }

  // Update links.json
  const data = JSON.parse(fs.readFileSync(LINKS_JSON, 'utf8'));
  const entry = { name, url };
  if (description) entry.description = description;
  if (iconPublicPath) entry.icon = iconPublicPath;
  data.links = data.links || [];
  data.links.push(entry);
  fs.writeFileSync(LINKS_JSON, JSON.stringify(data, null, 2) + '\n');

  console.log(`\n✓ Added "${name}" → ${data.links.length} link(s) total.`);
  console.log(`  Edit src/data/links.json directly to reorder or remove.\n`);
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
