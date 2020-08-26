import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './util/usePersistedState';

import Header from './components/Header';

import { AppContext } from './context/AppContext';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme', dark);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            buttonBack: false,
          }}
        >
          <BrowserRouter>
            <Header toggleTheme={toggleTheme} />
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
