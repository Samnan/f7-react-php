// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from './framework7-custom.js';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles

import '../css/app.less';

// Import App Component
import App from '../components/app.jsx';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);