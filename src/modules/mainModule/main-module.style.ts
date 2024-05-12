import { createUseStyles } from 'react-jss';
import { color } from '../../colors/palette';
import { StyleProps } from 'types/theme.type';

export const style = createUseStyles({
  main: {
    backgroundColor: (props: StyleProps) => (props.isDarkTheme ? color.primaryDark : color.primary),
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
  link: {
    color: color.text,
    fontFamily: `'Oxygen', sans-serif`,
  },
});
