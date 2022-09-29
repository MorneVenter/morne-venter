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
	},
	link: {
		color: color.secondary,
		backgroundColor: color.text,
		fontWeight: 'bold',
		textDecoration: 'none',
		padding: '10px',
		borderRadius: '15px',
		cursor: 'pointer',
	},
	image: {
		borderRadius: '10px',
		height: '150px',
		boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.25), 0 12px 20px 0 rgba(0, 0, 0, 0.25)`,
	},
	bodyText: {
		marginTop: 0,
	},
	headerText: {
		fontSize: '20px',
	},
});
