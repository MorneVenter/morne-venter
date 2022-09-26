import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { NoPage } from './pages/noPage';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
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
