import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { persistor, store } from './store';
import NavBar from './components/navbar/NavBar';
import Images from './components/images/Images';
import Favorites from './components/Favorites';
import './App.css';

class App extends Component { 

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <MuiThemeProvider>
            <div>
              <Favorites />
              <NavBar />
              <Images />
            </div>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
