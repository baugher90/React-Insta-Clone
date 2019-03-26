import styled, { css } from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    padding: 0.5em 2em;
  }

  ${props =>
    props.type === 'primary' &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Button;
