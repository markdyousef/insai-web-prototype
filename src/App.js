import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Activity from './components/Activity';
import Controls from './components/Controls';


const App = () => (
    <MuiThemeProvider>
      {/* <Activity /> */}
      <Controls />
    </MuiThemeProvider>
)

export default App;
