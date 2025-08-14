import { useTheme } from 'colors/Theme';
import { AboutMe } from 'components/aboutMe/AboutMe';
import { AppHeader } from 'components/appHeader/AppHeader';
import { ContactDetail } from 'components/contactDetail/ContactDetail';
import { ProjectBody } from 'components/projectBody/ProjectBody';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { style } from './main-module.style';

export const MainModule = () => {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';
	const { classes: css } = style({ isDarkTheme });
	return (
		<div className={css.main}>
			<Link to={routes.tools} className={css.link}>
				cool tools
			</Link>
			<AppHeader subHeader='hey, i make games and write code' mainHeader='check it out' />
			<ProjectBody />
			<AboutMe />
			<ContactDetail />
		</div>
	);
};
