import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './styles.scss';

import logo from '../../assets/suazo_logo.png'

const LoginSignup: React.FC<RouteComponentProps> = ({ history }) => {

  const something_else = () => {
    console.log('hello, welcome to the login page');
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <IonGrid>
          <IonRow style={{ "margin-top": "30vh" }}>
            <IonCol className="ion-text-center">
              <img src={logo}></img>
            </IonCol>
          </IonRow>
          <IonRow style={{ "margin-top": "30vh" }}>
            <IonCol className="ion-text-center">
              <IonButton className="signup_btn" size="large" expand="block" onClick={() => something_else()}>
                SIGN UP
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="login_btn" size="large" expand="block" onClick={() => something_else()}>
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
