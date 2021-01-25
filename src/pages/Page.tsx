import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import Splash from '../components/core/Splash';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [ loadingSplash, setLoadingSplash ] = useState(true);

  setTimeout(() => {
    setLoadingSplash(false);
  }, 6000);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
          <ExploreContainer name={name}></ExploreContainer>
          <Splash show={loadingSplash}></Splash>
      </IonContent>
    </IonPage>
  );
};

export default Page;
