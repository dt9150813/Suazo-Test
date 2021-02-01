import { IonContent, IonPage, IonButton, IonCol, IonRow, IonGrid, IonSlides, IonSlide, IonIcon } from '@ionic/react';
import React, { useState, useRef } from 'react';
import { arrowForward } from 'ionicons/icons';
import Splash from '../../components/core/Splash';
import './styles.scss';
import { RouteComponentProps } from 'react-router';

/* Slide images */
import empower_slide from '../../assets/introduction/empower.svg'
import access_slide from '../../assets/introduction/access.svg'
import organize_slide from '../../assets/introduction/organize.svg'

const Introduction: React.FC<RouteComponentProps> = ({ history }) => {

  const slideRef = useRef<HTMLIonSlidesElement>(null);
  const [showIntroduction, setshowIntroduction] = useState(false);
  const [loadingSplash, setLoadingSplash] = useState<boolean>(true);

  setTimeout(() => {
    setLoadingSplash(false);
  }, 1000);

  // lan_select only accept input of 'eng' or 'spn'
  const lan_select = (lan: "eng" | "spn") => {
    // TODO: either store the language selection or change the app state to display diff language content
    setshowIntroduction(true);
  }

  // the following varible initializes the intro slide show
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  }
  // direct users to the login/signUp pagex
  const startApp = async () => {
    history.push('/home', { direction: 'none' });
  };

  return (
    <IonPage id="introduction_page">
      <IonContent fullscreen className={showIntroduction ? "intro_background" : "suazo_background"} scrollY={false}>
        <Splash show={loadingSplash}></Splash>

        <IonGrid id="lan_selector" hidden={showIntroduction}>
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

        <IonSlides ref={slideRef} pager={false} hidden={!showIntroduction} options={slideOpts}>
          <IonSlide>
            <img src={empower_slide} alt="empower slide" className="slide-image" />
            <div className="description">
              <h1 className="slide-title">
                Empower
              </h1>
              <p>
                Suazo will empower you to start your own business. Out app will guide you through the complex process of government paperwork.
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <img src={access_slide} alt="access slide" className="slide-image" />
            <div className="description">
              <h1 className="slide-title">
                Access
              </h1>
              <p>
                Suazo gives you access to government paperwork that is catered exactly to your business needs.
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <img src={organize_slide} alt="organize slide" className="slide-image" />
            <div className="description">
              <h1 className="slide-title">
                Organize
              </h1>
              <p>
                We will help you organize your paperwork and guide you from the first step all the way to the last one.
              </p>
            </div>
          </IonSlide>

          <IonSlide className="ready_to_start">
            <h1 className="slide-title">Ready to Start?</h1>
            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Introduction;
