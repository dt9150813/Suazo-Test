import React, { useEffect, useState } from 'react';
import { CreateAnimation } from '@ionic/react';

interface FadeInOutProps {
  show: boolean;
  children: JSX.Element;
}

const FadeInOut: React.FC<FadeInOutProps> = ({ show, children }) => {
  const ref = React.createRef<CreateAnimation>();

  const [ shouldRender, setShouldRender ] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    } else if (ref.current) {
      ref.current!.animation
        .direction('reverse')
        .onFinish(() => setShouldRender(false))
        .play();
    }
  }, [show, ref])

  useEffect(() => {
    if (shouldRender && ref.current) {
      ref.current!.animation.play();
    }
  })

  return (
    <> {
      shouldRender &&
      <CreateAnimation
        ref={ref}
        duration={500}
        fromTo={{
          property: 'opacity',
          fromValue: '0',
          toValue: '1',
        }}
      >
        {children}
      </CreateAnimation>
    }
    </>
  )  
};

export default FadeInOut;
