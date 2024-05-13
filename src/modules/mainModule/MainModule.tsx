import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { style } from './main-module.style';
import { AppHeader } from 'components/appHeader/AppHeader';
import { ProjectBody } from 'components/projectBody/ProjectBody';
import { AboutMe } from 'components/aboutMe/AboutMe';
import { ContactDetail } from 'components/contactDetail/ContactDetail';
import { useTheme } from 'colors/Theme';

export const MainModule = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const { classes: css } = style({ isDarkTheme });
  return (
    <div className={css.main}>
      <Link
        to={routes.tools}
        className={css.link}
      >
        cool tools
      </Link>
      <AppHeader
        subHeader='hey, i make games and write code'
        mainHeader='check it out'
      />
      <ProjectBody />
      <AboutMe />
      <ContactDetail />
    </div>
  );
};
