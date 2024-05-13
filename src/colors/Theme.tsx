import { useContext } from 'react';
import { ThemeContext } from './theme-context';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('The method "useTheme" must be used within a CustomThemeProvider.');
  }
  return context;
};
