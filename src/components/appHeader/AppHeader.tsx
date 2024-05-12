import clsx from 'clsx';
import { style } from './app-header.style';
import { useTheme } from 'colors/Theme';
import skull from '../../media/skullo.png';

type AppHeaderProps = {
  mainHeader: string;
  subHeader: string;
};

export const AppHeader = ({ mainHeader, subHeader }: AppHeaderProps) => {
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
      <h2 className={css.subHeader}>{mainHeader}</h2>
      <h2 className={css.subHeader}>{subHeader}</h2>
      <h2 className={clsx(css.bounceArrow, css.subHeader)}>⥥</h2>
    </div>
  );
};
