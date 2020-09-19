import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;

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
