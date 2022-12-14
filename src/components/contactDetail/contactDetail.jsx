import React from 'react';
import { openUrl } from '../../utils/urlHandling';
import { style } from './contactDetail.style';

export const ContactDetail = () => {
	const css = style();
	return (
		<div className={css.container}>
			<h1 className={css.header}>Contact & Links</h1>
			<div className={css.contactRow}>
				<p
					onClick={() => openUrl('https://twitter.com/MelktertMan')}
					className={css.link}
				>
					Twitter
				</p>
				<p
					onClick={() => (window.location = 'mailto:morneventer.mv@gmail.com')}
					className={css.link}
				>
					Email
				</p>
				<p
					onClick={() => openUrl('https://morneventer.itch.io/')}
					className={css.link}
				>
					Itch.io
				</p>
				<p
					onClick={() => openUrl('https://store.steampowered.com/search/?developer=Morne%20Venter')}
					className={css.link}
				>
					Steam
				</p>
				<p
					onClick={() => openUrl('https://github.com/MorneVenter')}
					className={css.link}
				>
					GitHub
				</p>
			</div>
		</div>
	);
};
