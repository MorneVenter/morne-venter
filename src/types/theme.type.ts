export type ThemeColorType = 'dark' | 'light';

export type StyleProps = {
	isDarkTheme: boolean;
};

export type ThemeContextType = {
	theme: ThemeColorType;
	setDarkTheme: () => void;
	setLightTheme: () => void;
};
