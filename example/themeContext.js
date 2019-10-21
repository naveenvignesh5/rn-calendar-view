import {createContext} from 'react';

const DEFAULT_THEME = {
  dayBackgroundColor: '#FAFAFA',
  dayColor: '#333333',
  activeDayBackgroundColor: '#000AAA',
  activeDayColor: '#FFF',
};

const ThemeContext = createContext(DEFAULT_THEME);

export {DEFAULT_THEME, ThemeContext};
