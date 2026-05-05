import { atom } from 'recoil';
import { ThemeFormat } from './components/themeFormatting';

export const themeState = atom({
  key: 'themeState',
  default: new ThemeFormat(),
});
