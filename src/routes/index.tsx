import React, { FC } from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import retry from '../utils/retry';


/* Pages */
import Page from '../pages/Page';
import Introduction from '../pages/introduction';
import HomePage from '../pages/homePage'
import LoginSignup from '../pages/loginSignup'
import Signup from '../pages/loginSignup/signup'

const AppRoutes: FC = () => {
  return (
    // <IonRouterOutlet>
    <Switch>

      <Route path="/page/:name" component={Page} />
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login-signup" component={LoginSignup} />
      <Route exact path="/login-signup/signup" component={Signup} />
      <Redirect from="/" to="/introduction" exact />
    </Switch>
    // </IonRouterOutlet>
  );
};
export default AppRoutes;