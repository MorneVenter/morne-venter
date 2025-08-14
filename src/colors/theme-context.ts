import { createContext } from 'react';
import type { ThemeContextType } from 'types/theme.type';

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	setLightTheme: () => undefined,
	setDarkTheme: () => undefined,
});
