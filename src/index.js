import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyCfOOgzheQLfHXt7l76nxtdkRf_JiROyF0",
    authDomain: "gonisum-d36a5.firebaseapp.com",
    databaseURL: "https://gonisum-d36a5.firebaseio.com",
    projectId: "gonisum-d36a5",
    storageBucket: "gonisum-d36a5.appspot.com",
    messagingSenderId: "363312930806"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
