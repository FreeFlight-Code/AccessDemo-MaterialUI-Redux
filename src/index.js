import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';



const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    },
  }, {
    avatar: {
      borderColor: null,
    }
  });

ReactDOM.render(
    < MuiThemeProvider muiTheme={muiTheme} >
        <Provider store={ store }>    
            <App />
        </Provider>
    </ MuiThemeProvider >,

document.getElementById('root'));
