// import Menu from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Page from './pages/Page';
import Introduction from './pages/introduction';
import HomePage from './pages/homePage'
import LoginSignup from './pages/loginSignup'
import Signup from './pages/loginSignup/signup'
import Login from './pages/loginSignup/login'

// import AppRoutes from './routes';


const App: React.FC = () => {

	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					{/* <Menu /> */}
					<IonRouterOutlet id="main">
						<Route path="/page/:name" component={Page} />
						<Route exact path="/introduction" component={Introduction} />
						<Route exact path="/home" component={HomePage} />
						<Route exact path="/login-signup" component={LoginSignup} />
						<Route exact path="/login-signup/signup" component={Signup} />
						<Route exact path="/login-signup/login" component={Login} />
						<Redirect from="/" to="/introduction" exact />
					</IonRouterOutlet>
					{/* <AppRoutes /> */}
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
