#!/usr/bin/env node
/* eslint-disable no-console */
// Renders public/favicon.svg into every raster icon the site needs.
// Edit favicon.svg, run `npm run make-favicon`, commit the results.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const SOURCE = path.join(PUBLIC, 'favicon.svg');

// PNG sizes packed into favicon.ico. 48 is what Windows uses for shortcuts and
// what browsers pick for high-DPI tabs.
const ICO_SIZES = [16, 32, 48];

const PNG_TARGETS = [
  { file: 'logo192.png', size: 192, square: false },
  { file: 'logo512.png', size: 512, square: false },
  // iOS applies its own rounded mask and drops transparency, so the source for
  // this one gets square corners — otherwise you get rounding on top of rounding.
  { file: 'apple-touch-icon.png', size: 180, square: true },
];

function readSource() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Missing ${path.relative(ROOT, SOURCE)}`);
    process.exit(1);
  }
  return fs.readFileSync(SOURCE, 'utf8');
}

// The square variant is the same artwork with the corner radius zeroed out.
function squareCorners(svg) {
  const flattened = svg.replace(/rx="\d+(\.\d+)?"/, 'rx="0"');
  if (flattened === svg) {
    console.warn('  ! no rx="..." found in favicon.svg — apple-touch-icon may look rounded twice');
  }
  return flattened;
}

function render(svg, size) {
  // density scales the SVG rasterizer so small sizes stay crisp rather than
  // being downsampled from a blurry default-DPI render.
  return sharp(Buffer.from(svg), { density: 600 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// Minimal ICO container with PNG payloads (supported by every browser and by
// Windows Vista onward), which avoids pulling in an encoder dependency.
function buildIco(images) {
  const HEADER = 6;
  const ENTRY = 16;
  const header = Buffer.alloc(HEADER);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(images.length, 4);

  let offset = HEADER + ENTRY * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(ENTRY);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 encodes 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

async function main() {
  const svg = readSource();
  const square = squareCorners(svg);
  console.log(`source: ${path.relative(ROOT, SOURCE)}`);

  const icoImages = [];
  for (const size of ICO_SIZES) {
    icoImages.push({ size, data: await render(svg, size) });
  }
  const ico = buildIco(icoImages);
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico);
  console.log(`  favicon.ico          ${ICO_SIZES.join('/')}px  ${ico.length} bytes`);

  for (const { file, size, square: useSquare } of PNG_TARGETS) {
    const png = await render(useSquare ? square : svg, size);
    fs.writeFileSync(path.join(PUBLIC, file), png);
    console.log(`  ${file.padEnd(20)} ${size}px  ${png.length} bytes`);
  }

  console.log('done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
