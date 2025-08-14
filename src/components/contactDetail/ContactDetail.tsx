import { openUrl } from 'utils/urlHandling';
import { style } from './contact-detail.style';

export const ContactDetail = () => {
	const { classes: css } = style();

	const openMailWindow = () => {
		window.location.href = 'mailto:morneventer.mv@gmail.com';
	};

	return (
		<div className={css.container}>
			<h1 className={css.header}>Contact & Links</h1>
			<div className={css.contactRow}>
				<p onClick={() => openUrl('https://twitter.com/MelktertMan')} className={css.link}>
					Twitter
				</p>
				<p onClick={openMailWindow} className={css.link}>
					Email
				</p>
				<p onClick={() => openUrl('https://morneventer.itch.io/')} className={css.link}>
					Itch.io
				</p>
				<p
					onClick={() => openUrl('https://store.steampowered.com/search/?developer=Morne%20Venter')}
					className={css.link}
				>
					Steam
				</p>
				<p onClick={() => openUrl('https://github.com/MorneVenter')} className={css.link}>
					GitHub
				</p>
			</div>
		</div>
	);
};
