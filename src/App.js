import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Images from './components/images/Images';
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Images />
          </div>

        </MuiThemeProvider>
    );
  }
}

export default App;
