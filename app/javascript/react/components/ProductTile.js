import React from 'react';
import { Link } from 'react-router';

const ProductTile= (props) => {
  
  let imgUrl = props.image.url
  if (!imgUrl) {
    imgUrl = 'https://lh3.googleusercontent.com/-H2U3kQntnSA/XNkGpU93eaI/AAAAAAAARxg/1dX0xDP4Qa0uwOn8UzPbNfltcJAYIkqZgCK8BGAs/s0/2019-05-12.png';
  }

  return (
    <Link to={`/products/${props.id}`} className="product-tile">
      <button className="product-btn" >
        <img src={imgUrl} alt=''/>
        <div className="product-name">{props.name}</div>
      </button>
    </Link>
  );
}

export default ProductTile;
