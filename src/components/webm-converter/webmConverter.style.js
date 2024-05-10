import { createUseStyles } from 'react-jss';
import { color } from '../../colors/palette';

export const style = createUseStyles({
  main: {
    border: '2px solid',
    borderColor: color.text,
    width: '300px',
    height: '300px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadInput: {
    display: 'none',
  },
  icon: {
    height: '64px',
    width: '64px',
  },
  subText: {
    fontFamily: `'Oxygen', sans-serif`,
    fontSize: '11px',
    textAlign: 'center',
  },
});
