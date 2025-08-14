import { CustomThemeProvider } from 'colors/CustomThemeProvider';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/MainPage';
import { NoPage } from './pages/NoPage';
import { Tools } from './pages/ToolsPage';
import { routes } from './routes';

export const App = () => {
	return (
		<CustomThemeProvider>
			<HashRouter basename='/'>
				<Routes>
					<Route path={routes.main} element={<Main />} />
					<Route path={routes.tools} element={<Tools />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</HashRouter>
		</CustomThemeProvider>
	);
};

export default App;
