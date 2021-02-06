import { IonContent, IonItem, IonList, IonPage, IonLabel, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { db, auth } from '../../db';



const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  const createAccount = () => {
    // db.collection("users").add({
    //   name: name,
    //   email: email,
    //   password: password
    // })
    // .then((docRef) => {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //   console.error("Error adding document: ", error);
    // });

    auth.createUserWithEmailAndPassword(email!, password!)
    .then((userCredential) => {
    // Signed in 
    console.log("account created - signed in");
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
        <IonList>
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
            <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
        <IonButton className="primary_btn" onClick={createAccount}>Create</IonButton>
        <br />
        <a onClick={loginAccount}>LOG IN</a>
      </IonContent>
    </IonPage >
  );
};

export default Signup;
