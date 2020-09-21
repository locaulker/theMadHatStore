import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 14px;
  font-family: 'Open sans', sans-serif;
  cursor: pointer;
  font-weight: 300;
  text-transform: uppercase;
  background: #000;
  color: white;
  border: 1px solid black;
  white-space: nowrap;

  ${fullWidthStyles}

  &:hover:not(:disabled) {
    color: orange;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
