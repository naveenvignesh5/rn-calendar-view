import {createContext} from 'react';

const DEFAULT_THEME = {
  primaryColor: '#FAFAFA',
  primaryTextColor: '#333333',
  secondaryColor: '#000AAA',
  secondaryTextColor: '#FFFFFF',
};

const ThemeContext = createContext(DEFAULT_THEME);

export {DEFAULT_THEME, ThemeContext};
