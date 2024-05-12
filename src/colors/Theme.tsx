import { PropsWithChildren, createContext, useContext, useState } from 'react';

type themeType = 'dark' | 'light';

type ThemeContextType = {
  theme: themeType;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setLightTheme: () => undefined,
  setDarkTheme: () => undefined,
});

export const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<themeType>('light');
  const values: ThemeContextType = {
    theme: theme,
    setDarkTheme: () => setTheme('dark'),
    setLightTheme: () => setTheme('light'),
  };
  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('The method "useTheme" must be used within a CustomThemeProvider.');
  }
  return context;
};
