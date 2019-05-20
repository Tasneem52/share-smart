import React from 'react';
import { Link } from 'react-router';
import ProductTile from './ProductTile'

const ProductPortal= (props) => {
  let products = props.products.map(product => {

    return (
      <ProductTile
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
      />
    );
  });

  return (
    <div className="product-portal">
      {products}
      </div>
  );
}

export default ProductPortal;
