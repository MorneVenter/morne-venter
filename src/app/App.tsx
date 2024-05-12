import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from 'pages/MainPage';
import { CustomThemeProvider } from 'colors/Theme';
import { Tools } from 'pages/ToolsPage';
import { NoPage } from 'pages/NoPage';
import { routes } from 'routes';

export const App = () => {
  return (
    <CustomThemeProvider>
      <HashRouter basename='/'>
        <Routes>
          <Route
            path={routes.main}
            element={<Main />}
          />
          <Route
            path={routes.tools}
            element={<Tools />}
          />
          <Route
            path='*'
            element={<NoPage />}
          />
        </Routes>
      </HashRouter>
    </CustomThemeProvider>
  );
};
