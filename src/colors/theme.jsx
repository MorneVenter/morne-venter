import React, { useState } from 'react';

const light = 'light';
const dark = 'dark';

const ThemeContext = React.createContext({
	theme: light,
	setDarkTheme: () => {},
	setLightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(light);
	const values = {
		theme: theme,
		setDarkTheme: () => setTheme(dark),
		setLightTheme: () => setTheme(light),
	};
	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('The method "useTheme" must be used within a ThemeProvider.');
	}
	return context;
};
