import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './core/NavbarComponent';
import Landing from './core/Landing.js';
import Routes from './Routes';
import AuthState from './context/AuthState';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Routes component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
};
export default App;
