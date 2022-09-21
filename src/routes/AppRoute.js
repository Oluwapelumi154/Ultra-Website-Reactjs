import React from 'react';
import GlobalStyle from '../global-style';
import { Navbar, Footer } from '../components';
import { Home, Products, Services, SignUp } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
const AppRoute = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/signup' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRoute;
