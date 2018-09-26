import styled from 'styled-components';

const Spacer = styled.div`
  margin: ${({ margin }) => margin.join('px ')}px;
`;

export default Spacer;
