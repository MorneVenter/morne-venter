import React from 'react';
import { style } from './appHeader.style';
import skull from '../../media/skullo.png';
import clsx from 'clsx';
import { useTheme } from '../../colors/theme';

export const AppHeader = () => {
	const css = style();
	const { theme, setDarkTheme, setLightTheme } = useTheme();
	const isDarkTheme = theme === 'dark';
	return (
		<div className={css.headerContainer}>
			<h1 className={css.header}>morné venter</h1>
			<div className={css.themeToggleContainer}>
				<div
					className={isDarkTheme ? clsx(css.themeToggle, css.activeThemeToggle) : css.themeToggle}
					onClick={setDarkTheme}
				>
					dark
				</div>{' '}
				|{' '}
				<div
					className={isDarkTheme ? css.themeToggle : clsx(css.themeToggle, css.activeThemeToggle)}
					onClick={setLightTheme}
				>
					light
				</div>
			</div>
			<img
				src={skull}
				alt='Morne Venter Skull'
				className={css.skull}
			/>
			<br />
			<h2 className={css.subHeader}>hey, i make games</h2>
			<h2 className={css.subHeader}>check it out</h2>
			<h2 className={clsx(css.bounceArrow, css.subHeader)}>⥥</h2>
		</div>
	);
};
