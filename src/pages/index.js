import React, { useContext } from 'react';
import { Layout, SEO } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);

  return <Layout></Layout>;
};

export default IndexPage;
