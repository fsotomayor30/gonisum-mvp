import React from 'react';
import {render} from 'react-dom';
import firebase from 'firebase';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


//Routes
import AppRoutes from './routes';

var config = {
    apiKey: "AIzaSyCfOOgzheQLfHXt7l76nxtdkRf_JiROyF0",
    authDomain: "gonisum-d36a5.firebaseapp.com",
    databaseURL: "https://gonisum-d36a5.firebaseio.com",
    projectId: "gonisum-d36a5",
    storageBucket: "gonisum-d36a5.appspot.com",
    messagingSenderId: "363312930806"
  };
  firebase.initializeApp(config);

render(<Router>
    <AppRoutes />
</Router>,
document.getElementById('root'));
registerServiceWorker();
