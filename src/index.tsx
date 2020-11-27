import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';

import App from './Components/App';

import 'onsenui/css/onsenui.min.css';
import 'onsenui/css/onsen-css-components.min.css';
import './styles.css';

import { forceScreeSize } from './forceScreenSize';
forceScreeSize(400, 600);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', (): void => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
}

ReactDOM.render(<App />, document.getElementById('root'));