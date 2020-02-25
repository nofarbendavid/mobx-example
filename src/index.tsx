import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'index.scss';

if (process.env.NODE_ENV === 'development') {
  const Mimic = require('mimic').default;
  Mimic.setAppName('MyApp');
}

ReactDOM.render(<App />, document.getElementById('root'));
