import React from 'react';
import { style } from './mainModule.style';
import { AppHeader } from '../../components/appHeader/appHeader';
import { ProjectBody } from '../../components/projectBody/projectBody';
import { ContactDetail } from '../../components/contactDetail/contactDetail';
import { AboutMe } from '../../components/aboutMe/aboutMe';
import { useTheme } from '../../colors/theme';
import { routes } from '../../routes';

export const MainModule = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const css = style({ isDarkTheme });
  return (
    <div className={css.main}>
      <a
        href={routes.tools}
        className={css.link}
      >
        cool tools
      </a>
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
