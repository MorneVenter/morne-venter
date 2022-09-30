import React from 'react';
import { style } from './mainModule.style';
import { AppHeader } from '../../components/appHeader/appHeader';
import { ProjectBody } from '../../components/projectBody/projectBody';
import { ContactDetail } from '../../components/contactDetail/contactDetail';
import { AboutMe } from '../../components/aboutMe/aboutMe';
import { useTheme } from '../../colors/theme';

export const MainModule = () => {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';
	const css = style({ isDarkTheme });
	return (
		<div className={css.main}>
			<AppHeader />
			<ProjectBody />
			<AboutMe />
			<ContactDetail />
		</div>
	);
};
