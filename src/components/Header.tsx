import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import { THEMES, THEME_ORDER, ThemeId } from '../theme/themes';
import { showPhotos } from '../data/photos';

const TABS = [
  { to: '/', label: 'profile', end: true },
  { to: '/work', label: 'work' },
  ...(showPhotos ? [{ to: '/photos', label: 'photos' }] : []),
  { to: '/resume', label: 'resume' },
  { to: '/contact', label: 'contact' },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='ks-header'>
      <div className='ks-header-inner'>
        <Link to='/' className='ks-wordmark'>
          <div className='ks-wordmark-name'>kylespace</div>
          <div className='ks-wordmark-sub'>a place for kyle.</div>
        </Link>

        <div className='ks-header-spacer' />

        <div className='ks-themes'>
          <div className='ks-themes-label' id='ks-theme-label'>
            change theme
          </div>
          {/* Five pills do not fit a phone. The same choice ships twice: pills on
              desktop, a native select on mobile — CSS shows exactly one, so the
              hidden one is out of the accessibility tree too. */}
          <select
            className='ks-theme-select'
            aria-labelledby='ks-theme-label'
            value={theme}
            onChange={(event) => setTheme(event.target.value as ThemeId)}
          >
            {THEME_ORDER.map((id) => (
              <option key={id} value={id}>
                {THEMES[id].label}
              </option>
            ))}
          </select>

          <div className='ks-pills' role='radiogroup' aria-labelledby='ks-theme-label'>
            {THEME_ORDER.map((id) => {
              const active = id === theme;
              return (
                <button
                  key={id}
                  type='button'
                  role='radio'
                  aria-checked={active}
                  onClick={() => setTheme(id)}
                  className={active ? 'ks-pill is-active' : 'ks-pill'}
                >
                  <span className='ks-pill-dot' style={{ background: THEMES[id].dot }} />
                  {THEMES[id].label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <nav className='ks-nav' aria-label='Primary'>
        <div className='ks-nav-inner'>
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) => (isActive ? 'ks-tab is-active' : 'ks-tab')}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
