import React, { Component } from 'react';
import { Link } from 'react-router';

import ProductPortal from '../components/ProductPortal'

class ProductsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productSelected: null,
      group: {},
    }
  }

  handleGroupShowPage = () => {
    const group = this.props.group;
    console.log(group)
    if (!group) {
      return <h2>ShareSmart</h2>
    };

    const members = group.invitations.map(invitee => {
      return (
        <div>{invitee.email} ({invitee.status})</div>
      );
    })

    return (
      <div>
      <h2>{group.name}</h2>
      <div>{group.description}</div>

      <ProductPortal products={group.products} />

      <Link to={`groups/${group.id}/products/new`}>
        <button onClick={this.handleStuff}>Add product</button>
      </Link>

      </div>
    );
  };

  handleStuff() {
    window.location.reload();
  }

  render() {
    console.log('In Product render::');
    console.log(this.props);

    const group = this.props.group;

    return (
      <div className="group">
        {this.handleGroupShowPage()}
      </div>
    );
  }
}

export default ProductsContainer;
