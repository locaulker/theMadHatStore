import styled from 'styled-components';

export const CollectionTileWrapper = styled.div`
  height: 400px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 50px;

  > div {
    flex-grow: 1;
  }
`;

export const CollectionTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;

  > div {
    padding: 20px;
  }
`;

export const Title = styled.div`
  padding: 5px 50px;
  margin-right: 5px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 55px;
  border-radius: 5px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  background: ${props => (props.sale ? 'orangered' : 'none')};
`;

export const Description = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: normal;
  margin: 10px;
  border-radius: 10px;
  padding: 5px 10px;
  /* background: ${props => (props.sale ? 'orangered' : 'none')};
  text-align: center; */
`;
