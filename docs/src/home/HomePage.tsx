import { Phone } from '@junhoyeo/iphone';

import '@junhoyeo/iphone/dist/style.css';

import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Phone transformScale={1} apps={[]} />
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
