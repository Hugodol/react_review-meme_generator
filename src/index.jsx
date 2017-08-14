/* START SOLUTION */
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

/* ELSE
// index.jsx is the root of a React app
  // This is where you tell React where to attach to the DOM

// Since we are using webpack, make sure to import everything needed:
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';
// import App component here

// Use ReactDOM to render the app.
END SOLUTION */
