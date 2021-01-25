import React from 'react';
import { CreateAnimation } from '@ionic/react';

interface FadeOutProps {
  children: JSX.Element;
}

const FadeOut = React.forwardRef<CreateAnimation, FadeOutProps>(({ children }, ref) => (
  <CreateAnimation
    ref={ref}
    duration={1000}
    fromTo={{
      property: 'opacity',
      fromValue: '1',
      toValue: '0',
    }}
  >
    {children}
  </CreateAnimation>
));

export default FadeOut;
