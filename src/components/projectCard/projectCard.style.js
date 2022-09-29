import { createUseStyles } from 'react-jss';
import { color } from '../../colors/palette';

export const style = createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '340px',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '15px',
		marginBottom: '40px',
	},
	body: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: '73px',
	},
	link: {
		color: color.primary,
		backgroundColor: color.text,
		textDecoration: 'none',
		padding: '10px',
		borderRadius: '15px',
		cursor: 'pointer',
		transition: 'transform .2s',
		'&:hover': {
			transform: 'scale(1.15)',
		},
	},
	image: {
		borderRadius: '10px',
		height: '170px',
		boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.15), 0 12px 20px 0 rgba(0, 0, 0, 0.15)`,
	},
	bodyText: {
		marginTop: 0,
	},
	headerText: {
		fontSize: '20px',
	},
});
