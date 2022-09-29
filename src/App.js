import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/main';
import { NoPage } from './pages/noPage';
import { routes } from './routes';

export const App = () => {
	return (
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
	);
};
