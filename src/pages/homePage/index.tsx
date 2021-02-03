import { IonContent, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import Splash from '../../components/core/Splash';
import { RouteComponentProps } from 'react-router';

const HomePage: React.FC<RouteComponentProps> = ({ history }) => {

  const [loadingSplash, setLoadingSplash] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const app_init = () => {
    if (!loggedIn) {
      history.push('/login-signup', { direction: 'none' });
    } else {
      setLoggedIn(true);
    }
  }

  setTimeout(() => {
    setLoadingSplash(false);
  }, 1000);


  return (
    <IonPage onLoad={app_init}>
      <IonContent fullscreen scrollY={false}>
        <Splash show={loadingSplash}></Splash>

          This is the home page, but nothing is here yet :'(

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
