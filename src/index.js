import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3d6chD0m31ywIQBdZm1UO3dxZKoGiS_Y",
    authDomain: "blackgame-e102d.firebaseapp.com",
    databaseURL: "https://blackgame-e102d.firebaseio.com",
    projectId: "blackgame-e102d",
    storageBucket: "blackgame-e102d.appspot.com",
    messagingSenderId: "325901267150"
  };
  firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);
