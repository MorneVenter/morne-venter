import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './colors/theme';
import { Main } from './pages/main';
import { Tools } from './pages/tools';
import { NoPage } from './pages/noPage';
import { routes } from './routes';

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <Routes>
          <Route
            path={routes.main}
            exact
            element={<Main />}
          />
          <Route
            path={routes.tools}
            exact
            element={<Tools />}
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
