import React from 'react';
import { ProjectCard } from '../projectCard/projectCard';
import { style } from './projectBody.style';
import emberCrusade from '../../media/ember_crusade_banner.jpg';
import enterDigiton from '../../media/enter_digiton_banner.jpg';
import unknown from '../../media/unknown.png';

export const ProjectBody = () => {
	const css = style();
	return (
		<div className={css.body}>
			<div className={css.projectColumn}>
				<h1 className={css.projectHeader}>Current Projects</h1>
				<ProjectCard
					headerText='TBA'
					bodyText='currently in development (202X)'
					image={unknown}
				/>
			</div>

			<div className={css.projectColumn}>
				<h1 className={css.projectHeader}>Finished Projects</h1>
				<ProjectCard
					headerText='Ember Crusade IV'
					bodyText='a roguelike bullet hell shooter (2022)'
					link='https://store.steampowered.com/app/1848860/Ember_Crusade_IV/'
					image={emberCrusade}
				/>
				<ProjectCard
					headerText='Enter Digiton'
					bodyText='a cute 1-bit metroidvania (2020)'
					link='https://store.steampowered.com/app/1296860/Enter_Digiton/'
					image={enterDigiton}
				/>
			</div>
			<div className={css.projectColumn}>
				<h1 className={css.projectHeader}>Experiments</h1>
				<ProjectCard
					headerText={`The Reaper's Grim`}
					bodyText='a halloween game made in the 30 days of october (2022)'
					image={unknown}
				/>
			</div>
		</div>
	);
};
