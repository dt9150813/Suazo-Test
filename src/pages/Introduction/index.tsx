import { IonContent, IonPage, IonButton, IonCol, IonRow, IonGrid } from '@ionic/react';
import React, { useState } from 'react';
// import { useParams } from 'react-router';
import Splash from '../../components/core/Splash';
// import ExploreContainer from '../../components/ExploreContainer';
import './styles.scss';

const Introduction: React.FC = () => {

  const [loadingSplash, setLoadingSplash] = useState<boolean>(true);

  setTimeout(() => {
    setLoadingSplash(false);
  }, 1000);

  // lan_select only accept input of 'eng' or 'spn'
  const lan_select = (lan: "eng" | "spn") => {
    console.log(lan);
  }

  return (
    <IonPage>
      <IonContent fullscreen className="suazo_background">
        <Splash show={loadingSplash}></Splash>
        <IonGrid id="lan_selector">
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton color="light" size="large" expand="block" onClick={() => lan_select('eng')}>
                English
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton color="light" size="large" expand="block" onClick={() => lan_select('spn')}>
                Españo
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Introduction;
