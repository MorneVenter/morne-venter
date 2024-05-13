import { PropsWithChildren, useState } from 'react';
import { ThemeColorType, ThemeContextType } from 'types/theme.type';
import { ThemeContext } from './theme-context';

export const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeColorType>('light');
  const values: ThemeContextType = {
    theme: theme,
    setDarkTheme: () => setTheme('dark'),
    setLightTheme: () => setTheme('light'),
  };
  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
