import React from 'react';
import { ProjectCard } from '../projectCard/projectCard';
import { style } from './projectBody.style';
import emberCrusade from '../../media/ember_crusade_banner.jpg';
import enterDigiton from '../../media/enter_digiton_banner.jpg';

export const ProjectBody = () => {
	const css = style();
	return (
		<div className={css.body}>
			<ProjectCard
				headerText='Enter Digiton'
				bodyText='a cute 1-bit metroidvania (2020)'
				link='https://store.steampowered.com/app/1296860/Enter_Digiton/'
				image={enterDigiton}
			/>
			<ProjectCard
				headerText='Ember Crusade IV'
				bodyText='a roguelike bullet hell shooter (2022)'
				link='https://store.steampowered.com/app/1848860/Ember_Crusade_IV/'
				image={emberCrusade}
			/>
		</div>
	);
};
