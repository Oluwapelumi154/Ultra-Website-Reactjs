import React from 'react';
import GlobalStyle from '../global-style';
import { Navbar } from '../components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const AppRoute = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />;
    </Router>
  );
};

export default AppRoute;
