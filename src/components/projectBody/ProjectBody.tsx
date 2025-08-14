import { ProjectCard } from 'components/projectCard/ProjectCard';
import doomerLife from 'media/doomer_sim_banner.png';
import emberCrusade from 'media/ember_crusade_banner.jpg';
import enterDigiton from 'media/enter_digiton_banner.jpg';
import nebulaNexus from 'media/nebula_nexus.png';
import reapersGrim from 'media/reapers_grim_banner.png';
import seaOfVampires from 'media/sea_of_vampires_banner.png';
import unknown from 'media/unknown.png';
import { style } from './project-body.style';

export const ProjectBody = () => {
	const { classes: css } = style();

	return (
		<div className={css.body}>
			<div className={css.projectColumn}>
				<h1 className={css.projectHeader}>Current Projects</h1>
				<ProjectCard headerText='TBA' bodyText='currently in development (202X)' image={unknown} />
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
					bodyText='a short halloween game (2022)'
					link={'https://morneventer.itch.io/the-reapers-grim'}
					image={reapersGrim}
					experiment={true}
				/>
				<ProjectCard
					headerText={`Sea of Vampires`}
					bodyText='entry for the october mini jam (2022)'
					link={'https://morneventer.itch.io/sea-of-vampires'}
					image={seaOfVampires}
					experiment={true}
				/>
				<ProjectCard
					headerText={`Doomer Life Simulator`}
					bodyText='a 20 second jam game (2022)'
					link={'https://morneventer.itch.io/doomer-life-simulator'}
					image={doomerLife}
					experiment={true}
				/>
				<ProjectCard
					headerText={`Nebula Nexus`}
					bodyText='a retro bullet hell game (2024)'
					link={'https://morneventer.itch.io/nebula-nexus'}
					image={nebulaNexus}
					experiment={true}
				/>
			</div>
		</div>
	);
};
