import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

export const BackdropCentered = styled(Backdrop)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
