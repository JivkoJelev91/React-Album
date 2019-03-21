import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Images from './components/images/Images';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './store/index'
import './App.css';
import Favorites from './components/Favorites';

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Favorites />
            <NavBar />
            <Images />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
