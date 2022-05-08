import { ThemeProvider } from '@mui/material';
import React from 'react';
import Router from '../src/router/Router';
import GlobalState from './global/globalState';
import { themeMAIN } from '../src/constants/theme'

function App() {
  return (
    <ThemeProvider theme={themeMAIN} >
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
