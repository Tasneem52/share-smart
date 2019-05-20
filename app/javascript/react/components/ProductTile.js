import React from 'react';
import { Link } from 'react-router';

const ProductTile= (props) => {

  let imgUrl = props.image.url
  if (!imgUrl) {
    imgUrl = 'https://s3.amazonaws.com/sharesmart-production/uploads/image-unavailable.jpeg';
  }

  return (
    <Link to={`/products/${props.id}`} className="product-tile">
      <button className="product-btn" >
        <img className="product-image" src={imgUrl} alt=''/>
        <div className="product-name">{props.name}</div>
      </button>
    </Link>
  );
}

export default ProductTile;
