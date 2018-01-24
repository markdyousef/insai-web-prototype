import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from './components/Main'

const App = () => (
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
)

export default App;
