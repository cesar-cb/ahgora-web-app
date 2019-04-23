import styled from 'styled-components';

const Container = styled.div`
  align-items: ${({ center }) => (center ? 'center' : 'start')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  ${({ fullPage }) => fullPage && 'height: calc(100vh - 66px);'}
`;

export default Container;
