import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackdropCentered } from './Backdrop';

const loader = keyframes`
  0%: {
    transform: rotate(0deg);
  }
  25%: {
    transform: rotate(180deg);
  }
  50%: {
    transform: rotate(180deg);
  }
  75%: {
    transform: rotate(360deg);
  }
  100%: {
    transform: rotate(360deg);
  }
`;

const loaderInner = keyframes`
  0%: {
    height: 0%;
  }
  25%: {
    height: 0%;
  }
  50%: {
    height: 100%;
  }
  75%: {
    height: 100%;
  }
  100%: {
    height: 0%;
  }
`;

const Spinner = styled.div`
  animation: ${loader} 2s infinite ease;
  border: 4px solid #fff;
  display: inline-block;
  height: 30px;
  width: 30px;
`;

const Inner = styled.div`
  animation: ${loaderInner} 2s infinite ease -in;
  background-color: '#fff';
  display: 'inline-block';
  vertical-align: 'top';
  width: '100%';
`;

const Loader = () => (
  <BackdropCentered>
    <Spinner>
      <Inner />
    </Spinner>
  </BackdropCentered>
);

export default Loader;
