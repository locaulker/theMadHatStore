import styled from 'styled-components';

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 40px;

  > div {
    padding: 8px;

    &:first-child {
      text-align: right;
    }
  }
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;

  > div {
    padding: 8px;
    text-transform: uppercase;
  }
`;

export const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;

  > div {
    padding: 8px;

    &:first-child {
      > div:first-child {
        font-weight: 600;
        /* letter-spacing: 1px; */
      }
      > div:last-child {
        color: #999;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:last-child {
    text-align: right;
  }
`;
