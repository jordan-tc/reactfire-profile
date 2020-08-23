import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';
import fbConfig from './FirebaseConfig.js';
 

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={fbConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(process.env.firebaseConfig)
