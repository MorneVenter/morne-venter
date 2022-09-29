import React from 'react';
import { openUrl } from '../../utils/urlHandling';
import { style } from './projectCard.style';

export const ProjectCard = ({ headerText, bodyText, link, image }) => {
	const css = style();

	const handleLinkClick = () => {
		openUrl(link);
	};

	return (
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
