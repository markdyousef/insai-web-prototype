import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';

import reducers from './reducers';
import Dashboard from './components/Dashboard';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Main>
        <Dashboard />
      </Main>
    </MuiThemeProvider>
  </Provider>
)

export default App;
