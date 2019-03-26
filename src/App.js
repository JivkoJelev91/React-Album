import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { persistor, store } from './store';
import AllImages from './components/container/AllImages';
import './App.css';

class App extends Component { 
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <MuiThemeProvider>
            <AllImages />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
