import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Activity from './components/Activity';
import Dashboard from './components/Dashboard';


const App = () => (
    <MuiThemeProvider>
      {/* <Activity /> */}
      <Dashboard />
    </MuiThemeProvider>
)

export default App;
