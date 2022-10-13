import { createUseStyles } from 'react-jss';
import { mobileBreak } from '../../breakpoints';
import { color } from '../../colors/palette';

export const style = createUseStyles({
	container: {
		width: '700px',
		marginTop: '10vh',
		[mobileBreak]: {
			width: '350px',
			maxWidth: '350px',
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
		margin: 'auto auto 20px auto',
		textTransform: 'uppercase',
		fontSize: '16px',
		letterSpacing: '3px',
	},
	image: {
		width: '500px',
		boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15)`,
		[mobileBreak]: {
			width: '320px',
			margin: 'auto',
		},
	},
	aboutMeContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		[mobileBreak]: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	aboutMeText: {
		height: '200px',
		margin: 'auto auto auto 20px',
	},
	skillRow: {
		display: 'flex',
		flexDirection: 'row',
		margin: '4vh auto 5vh auto',
		justifyContent: 'space-around',
		width: '75%',
		flexWrap: 'wrap',
		[mobileBreak]: {
			width: '100%',
		},
	},
	skill: {
		color: color.primary,
		backgroundColor: color.text,
		margin: '3px',
		padding: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
		minWidth: '70px',
	},
});
