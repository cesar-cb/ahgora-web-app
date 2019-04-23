import styled from 'styled-components';
import { $bgColor, $primaryColor } from '@/components/settings';

const Main = styled.main`
  background-color: ${$bgColor};
  color: ${$primaryColor};
  font-family: 'SF Mono', monospace;
  padding: 0 1.5em;
`;

export default Main;
