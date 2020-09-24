import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured Hats'
  );

  return (
    <section>
      <h1
        style={{
          textAlign: 'center',
          margin: '2rem 0 3rem 0',
          fontWeight: '300',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '42px',
        }}
      >
        Featured
      </h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
