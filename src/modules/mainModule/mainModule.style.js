import { createUseStyles } from 'react-jss';
import { color } from '../../colors/palette';

export const style = createUseStyles({
	main: {
		backgroundColor: color.primary,
		minWidth: '100%',
		minHeight: '100%',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: color.text,
		fontFamily: `'Oxygen', sans-serif`,
		flexDirection: 'column',
	},
});
