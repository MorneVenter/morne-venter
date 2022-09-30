import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './colors/theme';
import { Main } from './pages/main';
import { NoPage } from './pages/noPage';
import { routes } from './routes';

export const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter basename='/morne-venter'>
				<Routes>
					<Route
						path={routes.main}
						exact
						element={<Main />}
					/>
					<Route
						path='*'
						element={<NoPage />}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
