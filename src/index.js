import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes'


ReactDOM.render(
  <React.StrictMode>
    { routes }
  </React.StrictMode>,
  document.getElementById('root')
);
