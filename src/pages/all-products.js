import React, { useContext } from 'react';
import { Layout, Filters } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

export default function AllProducts() {
  const { products, collections } = useContext(ProductContext);
  console.log(products);

  const Content = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 20px;
    grid-template-columns: 1fr 3fr;
  `;

  return (
    <Layout>
      <h4>{products.length} products</h4>
      <Content>
        <Filters />
        <div>Products</div>
      </Content>
    </Layout>
  );
}
