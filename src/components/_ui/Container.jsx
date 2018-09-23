import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'start')};
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  flex-direction: column;
  max-width: 800px;
  padding: 0 2em;
  width: 100%;
  margin: 0 auto;
`;

export default Container;
