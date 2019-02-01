import styled from 'styled-components';
import { $alert1, $alert2 } from '@/components/settings';

const Code = styled.code`
  background-color: #3e606f;
  border: 2px solid ${({ error }) => (error ? $alert1 : $alert2)};
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  overflow-x: auto;
  padding: 20px;
  width: 100%;
`;

export default Code;
