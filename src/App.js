import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';

// import Activity from './components/Activity';
import Dashboard from './components/Dashboard';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      {/* <Activity /> */}
      <Dashboard />
    </MuiThemeProvider>
  </Provider>
)

export default App;
