import React from 'react';
import { Layout, CartContents, SEO } from 'components';

export default function CartPage() {
  return (
    <Layout>
      <SEO title="Shopping Cart" description="TheMadHatter Cart" />
      <CartContents />
    </Layout>
  );
}
