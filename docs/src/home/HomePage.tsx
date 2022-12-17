import { Phone } from '@junhoyeo/iphone';
import React from 'react';
import styled from 'styled-components';

const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1651833826115-7530e72ce504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80';

const HomePage = () => {
  return (
    <Container>
      <Phone
        transformScale={1}
        apps={[]}
        backgroundImage={BACKGROUND_IMAGE_URL}
      />
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
