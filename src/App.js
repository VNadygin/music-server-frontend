import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Router from './Router';
import { Provider } from 'react-redux';
import initStore from './store';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={initStore()}>
        <MuiThemeProvider theme={theme}>
          <Router />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
