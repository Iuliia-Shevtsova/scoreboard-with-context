import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './Components/Context';
import App from './Components/App';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
);
