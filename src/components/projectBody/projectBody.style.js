import { createUseStyles } from 'react-jss';
import { mobileBreak } from '../../breakpoints';
import { color } from '../../colors/palette';

export const style = createUseStyles({
	body: {
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		[mobileBreak]: {
			flexDirection: 'column',
		},
	},
	projectColumn: {
		display: 'flex',
		flexDirection: 'column',
		margin: '15px',
		marginBottom: '50px',
		[mobileBreak]: {
			margin: '0px',
			marginBottom: '70px',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	projectHeader: {
		color: color.text,
		margin: '10px',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: '16px',
		letterSpacing: '3px',
	},
});
