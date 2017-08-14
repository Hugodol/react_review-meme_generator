/* START SOLUTION */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;

/* ELSE
// This is the top most container for the app.
  // The App component will contain the Nav Bar and the Routes.
END SOLUTION */
