import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    /* border: 1px dashed #ccc; */
  }

  > div:last-child {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
