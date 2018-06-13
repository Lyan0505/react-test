import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter><Router /></BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
