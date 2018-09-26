import styled from 'styled-components';
import { $bgColor, $primaryColor } from '@/components/settings';

const Main = styled.main`
  align-items: center;
  background-color: ${$bgColor};
  color: ${$primaryColor};
  display: flex;
  flex-direction: column;
  font-family: 'SF Mono', monospace;
  height: 100vh;
  justify-content: center;
  padding: 0 2em;
`;

export default Main;
