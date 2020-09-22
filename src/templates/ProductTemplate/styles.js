import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  margin: 30px 0;

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
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
    border-left: 1px dashed transparent;
    border-right: 1px dashed transparent;
  }
`;

export const Price = styled.div`
  margin: 20px 0;
  font-weight: 300;
  font-size: 24px;
`;
