import { useTheme } from 'colors/Theme';
import { AppHeader } from 'components/appHeader/AppHeader';
import { ContactDetail } from 'components/contactDetail/ContactDetail';
import { WebmConverterConverter } from 'components/webm-converter/WebmConverter';
import { style } from './tools-module.style';

export const ToolsModule = () => {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';
	const { classes: css } = style({ isDarkTheme });
	return (
		<div className={css.main}>
			<AppHeader mainHeader='tools' subHeader='some usefull tools i have built' />
			<WebmConverterConverter />
			<ContactDetail />
		</div>
	);
};
