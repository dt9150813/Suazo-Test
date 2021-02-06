import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './styles.scss';

import logo from '../../assets/suazo_logo.png'

const LoginSignup: React.FC<RouteComponentProps> = ({ history }) => {

  const toSignUp = () => {
    history.push('/login-signup/signup', { direction: 'none' });
  }

  const toLogIn = () => {
    history.push('/login-signup/login', { direction: 'none' });
  }

  const mt_3 = {
    "marginTop": "30vh"
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <IonGrid>
          <IonRow style={mt_3}>
            <IonCol className="ion-text-center">
              <img src={logo} alt="suazo logo"></img>
            </IonCol>
          </IonRow>
          <IonRow style={mt_3}>
            <IonCol className="ion-text-center">
              <IonButton className="primary_btn" size="large" expand="block" onClick={() => toSignUp()}>
                SIGN UP
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="secondary_btn" size="large" expand="block" onClick={() => toLogIn()}>
                LOG IN
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default LoginSignup;
