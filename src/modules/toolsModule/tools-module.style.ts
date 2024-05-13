import { color } from 'colors/palette';
import { tss } from 'tss-react';

export const style = tss.withParams<{ isDarkTheme: boolean }>().create(({ isDarkTheme }) => ({
  main: {
    backgroundColor: isDarkTheme ? color.primaryDark : color.primary,
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
}));
