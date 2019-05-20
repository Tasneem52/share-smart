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
    console.log(group)
    if (!group) {
      return <h2 className="app-title">ShareSmart</h2>
    };

    const members = group.invitations.map(invitee => {
      return (
        <div>{invitee.email} ({invitee.status})</div>
      );
    })

    let imageUrl = group.icon.url;
    if (!imageUrl) {
      imageUrl = 'https://lh3.googleusercontent.com/-H2U3kQntnSA/XNkGpU93eaI/AAAAAAAARxg/1dX0xDP4Qa0uwOn8UzPbNfltcJAYIkqZgCK8BGAs/s0/2019-05-12.png'
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
