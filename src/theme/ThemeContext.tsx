import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Backdrop, ThemeId, normalizeThemeId } from './themes';

const STORAGE_KEY = 'kylespace:theme';

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  backdrop: Backdrop;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'regular',
  setTheme: () => undefined,
  backdrop: 'photo',
});

/** URL wins over localStorage so shared links land on the theme they name. */
function initialTheme(): ThemeId {
  if (typeof window === 'undefined') return 'regular';
  const fromUrl = normalizeThemeId(new URLSearchParams(window.location.search).get('theme'));
  if (fromUrl) return fromUrl;
  try {
    const stored = normalizeThemeId(window.localStorage.getItem(STORAGE_KEY));
    if (stored) return stored;
  } catch (_) {
    // private mode / storage disabled — fall through to the default
  }
  return 'regular';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(initialTheme);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch (_) {
      // ignore — the theme still applies for this session
    }
  }, []);

  // prefers-reduced-data gets the flat gradient instead of a full-bleed photo
  const [backdrop, setBackdrop] = useState<Backdrop>('photo');
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-data: reduce)');
    const apply = () => setBackdrop(mq.matches ? 'flat' : 'photo');
    apply();
    if (mq.addEventListener) {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
    return undefined;
  }, []);

  const value = useMemo(() => ({ theme, setTheme, backdrop }), [theme, setTheme, backdrop]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
