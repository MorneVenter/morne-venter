import React from 'react';
import { style } from './appHeader.style';
import skull from '../../media/skullo.png';
import clsx from 'clsx';

export const AppHeader = () => {
	const css = style();
	return (
		<div className={css.headerContainer}>
			<h1 className={css.header}>morné venter</h1>
			<img
				src={skull}
				alt='Morne Venter Skull'
				className={css.skull}
			/>
			<br />
			<h2 className={css.subHeader}>hey, i make games</h2>
			<h2 className={css.subHeader}>check it out</h2>
			<br />
			<h2 className={clsx(css.bounceArrow, css.subHeader)}>⥥</h2>
		</div>
	);
};
