import React from 'react';
import { Link } from 'react-router';

import BackButton from './BackButton'


const ProductContent= (props) => {

 console.log(props.product);

 let userName = props.product.user ? props.product.user.name: ''
 let email = props.product.user ? props.product.user.email: ''


 return (
    <div className="product-show-content">
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <p>{props.product.purchase_date}</p>
      <p>{props.product.expiration_date}</p>
      <p>Posted by: {userName} ({email})</p>
      <div className="product-show-btn">
        <button className="interested-btn">I am interested</button>
        <BackButton text='Back to products' />
      </div>
    </div>
  );
}

export default ProductContent;
