import { IonContent, IonItem, IonList, IonPage, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { create } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { db, auth } from '../../db';



const Signup: React.FC<RouteComponentProps> = ({ history }) => {

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>();

  const validateInputs = () => {
    let errors = [];

    if (name === undefined || name?.length <= 0) {
      errors.push({ name: "Please enter a name" });
    } else if (name === "poop") {
      errors.push({ name: "that's a bad name" });
    }

    if (email === undefined || email?.length <= 0) {
      errors.push({ email: "Please enter a email" });
    } else if (email === "poop") {
      errors.push({ email: "that's a bad email" });
    }

    if (password === undefined || password.length <= 0) {
      errors.push({ password: "Please enter a password" });
    } else if (password !== passwordConfirm) {
      errors.push({ password: "Please enter both passwords are exact match" });
    }


    if (errors.length) {
      // display error module
      console.log(errors);
    } else {
      console.log('now we can move and save the user');
      // createAccount();
    }
  }

  const createAccount = () => {
    db.collection("users").add({
      name: name,
      email: email,
      password: password
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });

    // auth.createUserWithEmailAndPassword(email!, password!)
    //   .then((userCredential) => {
    //     // Signed in
    //     console.log("account created - signed in");
    //     var user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorMessage)
    //     // ..
    //   });
  }

  // const loginAccount = () => {
  //   console.log("here");
  //   auth.signInWithEmailAndPassword(email!, password!)
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log("signed in");
  //       var user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorMessage)
  //       // ..
  //     });
  // }

  const toLogIn = () => {
    history.push('/login-signup/login', { direction: 'none' });
  }

  const signupForm = {
    "width": "80vw",
    "margin": "0 auto"
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false} className="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList style={signupForm}>
                <h1>Create Account</h1>
                <IonItem>
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput value={name} onIonChange={e => setName(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Confirm Password</IonLabel>
                  <IonInput type="password" value={passwordConfirm} onIonChange={e => setPasswordConfirm(e.detail.value!)}></IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className="primary_btn" onClick={validateInputs}>Create</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <a className="secondary_text_link" onClick={toLogIn}>LOG IN</a>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Signup;
