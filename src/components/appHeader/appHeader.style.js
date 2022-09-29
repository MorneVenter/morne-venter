import { createUseStyles } from 'react-jss';
import { largeBreak, mobileBreak } from '../../breakpoints';
import { color } from '../../colors/palette';

export const style = createUseStyles({
	headerContainer: {
		backgroundColor: color.primary,
		width: '50%',
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		[mobileBreak]: {
			width: '100%',
		},
		[largeBreak]: {
			width: '700px',
		},
	},
	header: {
		fontSize: '55px',
		fontWeight: 'bold',
		[mobileBreak]: {
			fontSize: '35px',
		},
	},
	skull: {
		width: '700px',
		height: '700px',
		boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.25), 0 12px 20px 0 rgba(0, 0, 0, 0.25)`,
		[mobileBreak]: {
			width: '300px',
			height: '300px',
		},
	},
	subHeader: {
		fontSize: '24px',
		fontWeight: 'normal',
	},
	bounceArrow: {
		fontSize: '35px',
		animationDuration: '1.5s',
		animationIterationCount: 'infinite',
		animationName: '$bounce',
	},
	'@keyframes bounce': {
		'0%': { transform: 'translateY(0%)' },
		'50%': { transform: 'translateY(-60%)' },
		'75%': { transform: 'translateY(0%)' },
		'100%': { transform: ':translateY(0%)' },
	},
});
