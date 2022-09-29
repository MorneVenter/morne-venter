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
		width: '190px',
		margin: 'auto auto 20px auto',
		textTransform: 'uppercase',
		fontSize: '16px',
		letterSpacing: '3px',
	},
	contactRow: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: '1vh',
		justifyContent: 'space-around',
		width: '100%',
		flexWrap: 'wrap',
	},
	link: {
		color: color.text,
		borderColor: color.text,
		borderWidth: '1px',
		borderStyle: 'solid',
		margin: '10px',
		padding: '10px',
		textDecoration: 'none',
		textAlign: 'center',
		fontWeight: 'bold',
		transition: 'transform .2s',
		borderRadius: '15px',
		'&:hover': {
			transform: 'scale(1.15)',
		},
		cursor: 'pointer',
		minWidth: '70px',
	},
});
