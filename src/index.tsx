import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';

import App from 'components/App';
// import registerServiceWorker from './register-service-worker';

if (process.env.NODE_ENV === 'development') {
  // TODO: change to app name
  const Mimic = require('mimic').default;
  Mimic.setAppName('MyApp');
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
