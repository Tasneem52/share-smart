import React, { Component }  from 'react';
import { Link } from 'react-router';
import ProductContent from './ProductContent';
import GoogleMapTile from './GoogleMapTile';

class ProductShow extends Component {

  constructor(props){
    super(props);
    this.state = {
      product: {},
    }
  }

  componentDidMount() {
    fetch(`/api/v1/products/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ product: body.product });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleImage() {
    if (Object.keys(this.state.product).length === 0) {
      return null;
    }
    let imageUrl = 'https://lh3.googleusercontent.com/-H2U3kQntnSA/XNkGpU93eaI/AAAAAAAARxg/1dX0xDP4Qa0uwOn8UzPbNfltcJAYIkqZgCK8BGAs/s0/2019-05-12.png';
    if (this.state.product.image.url) {
      imageUrl = this.state.product.image.url;
    }
    return (<img className="product-show-img" src={imageUrl} />)
  }

  handleMaps = () => {
    if (Object.keys(this.state.product).length === 0) {
      return null;
    }
    return (
      <GoogleMapTile
        lat={this.state.product.user.latitude}
        lng={this.state.product.user.longitude}
      />
    );
  }

  render() {
    console.log('In render:: ProductShow');
    let product = this.state.product;



    return (
      <div className="product-show">
        <div className="product-show-tile">
          {this.handleImage()}
          <ProductContent product={product} />
        </div>
        {this.handleMaps()}
      </div>
    );
  }
}
export default ProductShow;
