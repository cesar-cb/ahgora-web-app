import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'start')};
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

export default Container;
