import React from 'react';
import './Splash.scss';
import logo from '../../assets/suazo_logo.png';
import FadeInOut from '../animations/FadeInOut';

interface SplashProps {
  show: boolean;
}

const Splash: React.FC<SplashProps> = ({ show }) => {

  return (
    <FadeInOut show={show}>
      <div className="splash-background">
        <img src={logo} alt="Suazo logo" />
      </div>
    </FadeInOut>
  );
};

export default Splash;
