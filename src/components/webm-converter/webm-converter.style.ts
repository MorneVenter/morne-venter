import { color } from 'colors/palette';
import { tss } from 'tss-react';

export const style = tss.create({
  main: {
    border: '2px solid',
    borderColor: color.text,
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
  header: {
    position: 'absolute',
    top: 0,
    background: color.text,
    color: color.primary,
    padding: '8px',
    height: '24px',
    lineHeight: '24px',
    width: '128px',
    textAlign: 'center',
    marginTop: '-22px',
  },
});
