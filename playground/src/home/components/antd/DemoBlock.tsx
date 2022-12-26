import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  padding?: string;
  background?: string;
  children?: React.ReactNode;
}

export const DemoBlock: FC<Props> = ({
  padding = '12px 12px',
  background = 'var(--adm-color-background)',
  ...props
}) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Main style={{ padding, background }}>{props.children}</Main>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    padding-bottom: 32px;
  }
`;
const Title = styled.span`
  padding: 12px 12px 8px;
  color: #697b8c;
  font-size: 14px;

  @media (prefers-color-scheme: dark) {
    color: #959da6;
  }
`;
const Main = styled.div`
  border-right: none;
  border-left: none;
`;
