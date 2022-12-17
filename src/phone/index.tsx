import React from 'react';

import { DivComponent } from '@/types/html';

import Device from './Device';

type PhoneProps = {
  transformScale: number;
};

const Phone: React.FC<PhoneProps> = ({ transformScale }) => {
  return (
    <Wrapper>
      <Device
        style={{
          transform: `scale(${transformScale})`,
          transformOrigin: 'top center',
        }}
      />
    </Wrapper>
  );
};

export default Phone;

const Wrapper: DivComponent = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  />
);
