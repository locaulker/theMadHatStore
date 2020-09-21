import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    > div:first-child {
      order: 2;
    }
    > div:first-child {
      order: 1;
    }
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
  select {
    padding: 0 5px;
    margin-right: 5px;
    outline: none;
  }
`;

export const Price = styled.div`
  margin: 20px 0;
  font-weight: 300;
  font-size: 24px;
`;
