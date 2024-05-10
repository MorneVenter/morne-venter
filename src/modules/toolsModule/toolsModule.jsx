import React from 'react';
import { useTheme } from '../../colors/theme';
import { style } from './toolsModule.style';
import { AppHeader } from '../../components/appHeader/appHeader';
import { WebmConverterConverter } from '../../components/webm-converter/webmConverter';
import { ContactDetail } from '../../components/contactDetail/contactDetail';

export const ToolsModule = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const css = style({ isDarkTheme });
  return (
    <div className={css.main}>
      <AppHeader
        mainHeader='tools'
        subHeader='some usefull tools i have built'
      />
      <WebmConverterConverter />
      <ContactDetail />
    </div>
  );
};
