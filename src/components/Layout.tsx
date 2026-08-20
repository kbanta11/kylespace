import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { useTheme } from '../theme/ThemeContext';
import { themeVars } from '../theme/themes';

/** Route changes should land at the top of the new page, not mid-scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const { theme, backdrop } = useTheme();

  return (
    <div className='ks-root' data-theme={theme} style={themeVars(theme, backdrop)}>
      <div className='ks-backdrop' aria-hidden='true' />
      <ScrollToTop />
      <Header />
      <main className='ks-main'>
        <Outlet />
      </main>
      <footer className='ks-footer'>
        <div className='ks-footer-inner'>
          <span>kylespace. a place for kyle. est. whenever.</span>
          <span>built by kyle banta</span>
        </div>
      </footer>
    </div>
  );
}
