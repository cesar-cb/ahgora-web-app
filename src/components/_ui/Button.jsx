import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #aedcf0;
  border-radius: 0px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #aedcf0;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  font-weight: 100;
  letter-spacing: 0.2em;
  margin: 0;
  min-width: 100%;
  outline: none;
  padding: ${({ big }) => (big ? '30px 20px' : '15px 20px')};
  text-transform: uppercase;
  transition-duration: 0.3s;
  transition-property: min-width, color, background-color;
  transition-timing-function: ease-in-out;
`;

export default Button;
