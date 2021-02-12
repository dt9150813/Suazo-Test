import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { auth } from '../../db';
import { useForm } from "react-hook-form";
import CustomInput, { InputProps } from "../../components/input/CustomInput";
import * as Yup from 'yup';


const Login: React.FC<RouteComponentProps> = ({ history }) => {

  const toSignUp = () => {
    history.push('/login-signup/signup', { direction: 'none' });
  }

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const { control, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const formFields: InputProps[] = [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Mail ID",
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
  ];


  const loginAccount = (data: any) => {
    console.log("here");
    auth.signInWithEmailAndPassword(data.email!, data.password!)
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
        <form onSubmit={handleSubmit(loginAccount)} className="signup_form">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Welcome Back</h1>
                <h5>Log in to continue</h5>
                {formFields.map((field, index) => (
                  <CustomInput {...field} control={control} key={index} errors={errors} />
                ))}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className="primary_btn" expand="block" type="submit" >LOG IN</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <a className="secondary_text_link" onClick={toSignUp}>Create account</a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage >
  );
};

export default Login;
