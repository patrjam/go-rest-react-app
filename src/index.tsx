import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { NetworkDetector } from './components/NetworkDetector/NetworkDetector';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NetworkDetector>
        <App />
      </NetworkDetector>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


