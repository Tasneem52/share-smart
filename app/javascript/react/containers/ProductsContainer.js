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

  deleteGroup = (groupId) => {
    fetch(`/api/v1/groups/${groupId}`, {
      credentials: 'same-origin',
      method: 'DELETE',
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in deletion: ${error.message}`))
    this.refreshPage();
  }

  handleGroupShowPage = () => {
    const group = this.props.group;
    if (!group) {
      return (
        <div>
          <h2 className="app-title">Welcome to ShareSmart</h2>
          <div className="app-description">
            <p>
             ShareSmart enables users to create groups and invite members to join the groups.
            </p>
            <p>You can share products and express interests in a group.</p>
          </div>
        </div>
      );
    };

    const members = group.invitations.map(invitee => {
      return (
        <div>{invitee.email} ({invitee.status})</div>
      );
    })

    let imageUrl = group.icon.url;
    if (!imageUrl) {
      imageUrl = 'https://s3.amazonaws.com/sharesmart-production/uploads/image-unavailable.jpeg'
    }

    let handleGroupDelete = () => {
      return this.deleteGroup(group.id);
    }

    return (
      <div>
        <img className="group-icon" src={group.icon.url} />
        <h2>{group.name}</h2>
        <div className="group-description">{group.description}</div>
        <ProductPortal products={group.products} />
        <Link to={`groups/${group.id}/products/new`}>
          <button className="add-product-btn" onClick={this.refreshPage}>Add product</button>
        </Link>
        <Link to={`/groups`}>
          <button onClick={handleGroupDelete}>Delete group</button>
        </Link>

      </div>
    );
  };

  refreshPage() {
    window.location.reload();
  }

  render() {
    const group = this.props.group;

    return (
      <div className="group">
        {this.handleGroupShowPage()}
      </div>
    );
  }
}

export default ProductsContainer;
