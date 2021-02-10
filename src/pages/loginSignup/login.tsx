import { IonContent, IonItem, IonList, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { db, auth } from '../../db';


const Signup: React.FC<RouteComponentProps> = ({ history }) => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const toSignUp = () => {
    history.push('/login-signup/signup', { direction: 'none' });
  }


  const loginAccount = () => {
    console.log("here");
    auth.signInWithEmailAndPassword(email!, password!)
      .then((userCredential) => {
        // Signed in
        console.log("signed in");
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false} className="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList className="signup_form">
                <h1>Welcome Back</h1>
                <h5>Log in to continue</h5>
                <IonItem className="signup_form_input">
                  <IonLabel position="floating">Mail ID</IonLabel>
                  <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem className="signup_form_input">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className="primary_btn signup_form" size="large" expand="block" onClick={loginAccount} >LOG IN</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <a className="secondary_text_link" onClick={toSignUp}>Create account</a>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Signup;
