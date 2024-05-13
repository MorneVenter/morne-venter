import { openUrl } from 'utils/urlHandling';
import { style } from './project-card.style';

type ProjectCardProps = {
  headerText: string;
  bodyText: string;
  image: string;
  link?: string;
  experiment?: boolean;
};

export const ProjectCard = ({ headerText, bodyText, link, image, experiment = false }: ProjectCardProps) => {
  const { classes: css } = style();

  const handleLinkClick = () => {
    if (link) openUrl(link);
  };

  return experiment ? (
    <div className={css.containerSmall}>
      <img
        src={image}
        alt={`${headerText}-banner`}
        className={css.imageSmall}
      />
      <div>
        <h2 className={css.headerTextSmall}>{headerText}</h2>
        <p className={css.bodyTextSmall}>{bodyText}</p>
      </div>
      {link ? (
        <p
          className={css.linkSmall}
          onClick={handleLinkClick}
        >
          SEE MORE
        </p>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className={css.container}>
      <div className={css.body}>
        <h2 className={css.headerText}>{headerText}</h2>
        {link ? (
          <p
            className={css.link}
            onClick={handleLinkClick}
          >
            SEE MORE
          </p>
        ) : (
          <></>
        )}
      </div>
      <p className={css.bodyText}>{bodyText}</p>
      <img
        src={image}
        alt={`${headerText}-banner`}
        className={css.image}
      />
    </div>
  );
};
