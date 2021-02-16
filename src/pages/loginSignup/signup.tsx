import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { db, auth } from '../../db';
import { useForm } from "react-hook-form";
import CustomInput, { InputProps } from "../../components/input/CustomInput";
import * as Yup from "yup";


const Signup: React.FC<RouteComponentProps> = ({ history }) => {

  const toLogIn = () => {
    history.push('/login-signup/login', { direction: 'none' });
  }

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    fullName: Yup.string().required().min(5).max(32),
    password: Yup.string().required().min(8),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match").required(),
  });
  const { control, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const formFields: InputProps[] = [
    {
      name: "fullName",
      label: "Full Name",
      ionItemClass: "signup_form_input",
      labelPosistion: "floating",
    },
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
      ionItemClass: "signup_form_input",
      labelPosistion: "floating",
    },
    {
      name: "password",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Password",
      ionItemClass: "signup_form_input",
      labelPosistion: "floating",
    },
    {
      name: "confirmPassword",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Confirm Password",
      ionItemClass: "signup_form_input",
      labelPosistion: "floating",
    },
  ];

  const createAccount = (data: any) => {
    db.collection("users").add({
      name: data.fullName,
      email: data.email,
      password: data.password
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });

    auth.createUserWithEmailAndPassword(data.email!, data.password!)
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
  };

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false} className="ion-text-center">
        <form onSubmit={handleSubmit(createAccount)} className="signup_form">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Create Account</h1>
                {formFields.map((field, index) => (
                  <CustomInput {...field} control={control} key={index} errors={errors} />
                ))}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className="primary_btn" expand="block" type="submit">
                  Create
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <a className="secondary_text_link" onClick={toLogIn}>LOG IN</a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage >
  );
};

export default Signup;
