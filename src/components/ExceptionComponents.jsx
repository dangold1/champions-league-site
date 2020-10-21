import React from 'react';
import { Container } from '../styles/ContainersStyle';
import { Loading, Error } from '../styles/ExeptionsStyles';

export const LoadingComponent = props => {
  return (
    <Container>
      <Loading />
      <strong>Loading...</strong>
    </Container>
  )
}

export const ErrorComponent = ({ message }) => {
  return (
    <Container>
      <Error />
      {message ? <strong>{message}</strong> : <strong>check which error</strong>}
    </Container>
  );
}
