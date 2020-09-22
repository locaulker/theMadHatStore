import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  border: 1px dashed #eee;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;

  > ${StyledLink} {
    border: 1px solid #777;
    text-decoration: none;
    display: block;
    padding: 10px 5px;
    text-align: center;
    margin-top: 20px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    word-spacing: 2px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin: 10px 20px;
`;
export const Description = styled.div`
  color: #666;
  text-align: left;
  padding: 0 10px 10px 20px;
`;

export const Price = styled.div`
  font-style: italic;
  padding: 20px;
  font-weight: 600;
  margin-top: auto;
`;
