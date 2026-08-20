import type { CSSProperties } from 'react';

export type ThemeId = 'regular' | 'surf' | 'titans' | 'nerd' | 'hike';

export type Backdrop = 'photo' | 'muted' | 'flat';

export type Theme = {
  id: ThemeId;
  label: string;
  /** dot color on the theme pill in the header */
  dot: string;
  /** background photo, if the theme has one */
  img?: string;
  /** scrim over the photo, normal and muted variants */
  scrim?: string;
  scrimStrong?: string;
  /** used when there is no photo, or backdrop is 'flat' */
  flat: string;
  /** the token set written onto the root element as CSS custom properties */
  vars: Record<string, string>;
};

const ARCHIVO = "'Archivo',system-ui,sans-serif";
const MONO = "'JetBrains Mono',monospace";

export const THEMES: Record<ThemeId, Theme> = {
  regular: {
    id: 'regular',
    label: 'Regular',
    dot: '#2f8bfa',
    flat: 'linear-gradient(180deg,#eaf1f9,#dae6f4)',
    vars: {
      '--chrome': '#0b4b9c',
      '--accent': '#0f63c6',
      '--cta': '#0f63c6',
      '--accent-ink': '#ffffff',
      '--link': '#0f63c6',
      '--surface': '#ffffff',
      '--soft': '#f2f7fd',
      '--ink': '#14181d',
      '--muted': '#5b6672',
      '--border': '#d7e2ee',
      '--name': '#0d1b2a',
      '--font': ARCHIVO,
    },
  },
  surf: {
    id: 'surf',
    label: "Surf's Up",
    dot: '#12a3ac',
    img: '/assets/images/surfboard.jpg',
    scrim: 'linear-gradient(rgba(6,42,52,.5),rgba(6,42,52,.62))',
    scrimStrong: 'linear-gradient(rgba(6,42,52,.78),rgba(6,42,52,.85))',
    flat: 'linear-gradient(180deg,#0d5b64,#0a4a52)',
    vars: {
      '--chrome': '#0a5c64',
      '--accent': '#0e7c86',
      '--cta': '#0e7c86',
      '--accent-ink': '#ffffff',
      '--link': '#0b6a72',
      '--surface': '#fffdf6',
      '--soft': '#f4efdf',
      '--ink': '#1a2326',
      '--muted': '#5f6c6e',
      '--border': '#e3dccb',
      '--name': '#ffffff',
      '--font': ARCHIVO,
    },
  },
  titans: {
    id: 'titans',
    label: 'Titan Up',
    dot: '#4b92db',
    img: '/assets/images/titans.png',
    scrim: 'linear-gradient(rgba(6,17,34,.5),rgba(6,17,34,.66))',
    scrimStrong: 'linear-gradient(rgba(6,17,34,.8),rgba(6,17,34,.88))',
    flat: 'linear-gradient(180deg,#0c2340,#081a30)',
    vars: {
      '--chrome': '#0c2340',
      '--accent': '#0c2340',
      // navy-on-navy CTAs disappear in this theme, so --cta is deliberately lighter
      '--cta': '#4b92db',
      '--accent-ink': '#ffffff',
      '--link': '#c8102e',
      '--surface': '#ffffff',
      '--soft': '#eaf3fb',
      '--ink': '#121a24',
      '--muted': '#5a6874',
      '--border': '#cddcec',
      '--name': '#ffffff',
      '--font': ARCHIVO,
    },
  },
  nerd: {
    id: 'nerd',
    label: 'Nerd Mode',
    dot: '#54d979',
    img: '/assets/images/nerd.jpg',
    scrim: 'linear-gradient(rgba(2,10,5,.72),rgba(2,10,5,.82))',
    scrimStrong: 'linear-gradient(rgba(2,10,5,.9),rgba(2,10,5,.94))',
    flat: 'linear-gradient(180deg,#07120b,#040a06)',
    vars: {
      '--chrome': '#07150c',
      '--accent': '#0f2a17',
      '--cta': '#1d5c30',
      '--accent-ink': '#7cff9b',
      '--link': '#7cff9b',
      '--surface': 'rgba(9,20,12,.9)',
      '--soft': 'rgba(124,255,155,.07)',
      '--ink': '#cdf7d7',
      '--muted': '#77a785',
      '--border': '#1e3d27',
      '--name': '#7cff9b',
      '--font': MONO,
    },
  },
  hike: {
    id: 'hike',
    label: "Let's Hike",
    dot: '#5c9c66',
    img: '/assets/images/hiking.jpg',
    scrim: 'linear-gradient(rgba(16,28,18,.42),rgba(16,28,18,.6))',
    scrimStrong: 'linear-gradient(rgba(16,28,18,.76),rgba(16,28,18,.86))',
    flat: 'linear-gradient(180deg,#2f5d3a,#22452c)',
    vars: {
      '--chrome': '#25482d',
      '--accent': '#2f5d3a',
      '--cta': '#3f7a4c',
      '--accent-ink': '#ffffff',
      '--link': '#2f5d3a',
      '--surface': '#fbfaf6',
      '--soft': '#eef1e7',
      '--ink': '#1d221c',
      '--muted': '#616c5e',
      '--border': '#e0ded1',
      '--name': '#ffffff',
      '--font': ARCHIVO,
    },
  },
};

export const THEME_ORDER: ThemeId[] = ['regular', 'surf', 'titans', 'nerd', 'hike'];

/** Slugs the old site used in URLs — keep them working. */
const LEGACY_SLUGS: Record<string, ThemeId> = {
  'surfs-up': 'surf',
  'titan-up': 'titans',
  'nerd-mode': 'nerd',
  'lets-hike': 'hike',
};

export function normalizeThemeId(value: string | null | undefined): ThemeId | null {
  if (!value) return null;
  const key = value.toLowerCase();
  if (key in THEMES) return key as ThemeId;
  return LEGACY_SLUGS[key] || null;
}

/**
 * Builds the CSS custom property set for a theme. Every component reads
 * var(--token) and knows nothing about which theme is active.
 */
export function themeVars(id: ThemeId, backdrop: Backdrop): CSSProperties {
  const theme = THEMES[id] || THEMES.regular;

  let bg = theme.flat;
  if (theme.img && backdrop !== 'flat') {
    const scrim = backdrop === 'muted' ? theme.scrimStrong : theme.scrim;
    bg = `${scrim}, url("${theme.img}") center center / cover no-repeat`;
  }

  return { ...theme.vars, '--bg': bg } as CSSProperties;
}
