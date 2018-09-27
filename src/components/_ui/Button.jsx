import styled from 'styled-components';

const sizes = props => {
  switch (props.size) {
    case 'small':
      return '12px';
    case 'big':
      return '20px';
    default:
      return '16px';
  }
};

const padding = props => {
  switch (props.size) {
    case 'small':
      return '10px';
    case 'big':
      return '30px 20px';
    default:
      return '15px 20px';
  }
};

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #aedcf0;
  border-radius: 0px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #aedcf0;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: ${props => sizes(props)};
  font-weight: 100;
  letter-spacing: 0.2em;
  margin: 0;
  width: ${({ full }) => (full ? '100%' : 'auto')};
  outline: none;
  padding: ${props => padding(props)};
  text-transform: uppercase;
  transition-duration: 0.3s;
  transition-property: min-width, color, background-color;
  transition-timing-function: ease-in-out;
  @media (hover: hover) {
    &:hover {
      background-color: #aedcf0;
      color: #686868;
    }
  }
`;

export default Button;
