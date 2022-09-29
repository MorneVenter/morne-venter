import React from 'react';
import { style } from './mainModule.style';
import { AppHeader } from '../../components/appHeader/appHeader';
import { ProjectBody } from '../../components/projectBody/projectBody';
import { ContactDetail } from '../../components/contactDetail/contactDetail';

export const MainModule = () => {
	const css = style();
	return (
		<div className={css.main}>
			<AppHeader />
			<ProjectBody />
			<ContactDetail />
		</div>
	);
};
