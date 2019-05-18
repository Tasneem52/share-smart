import React, { Component } from 'react';
import { Link } from 'react-router';

import GroupInfo from '../components/GroupInfo'
import ProductsContainer from './ProductsContainer'

class GroupsIndexContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      groups: [],
      selectedGroupId: null,
      selectedGroup: null,
    }
    this.handleGroupSelection=this.handleGroupSelection.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/groups')
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
        this.setState({ groups: body.groups });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleGroupSelection(groupId) {
    this.setState({ selectedGroupId: groupId })
    const selectedGroup = this.state.groups.find(group => group.id === groupId);
    this.setState({ selectedGroup })
  }

  handleStuff() {
    window.location.reload();
  }

  render() {
    console.log('In render:: GroupsIndexContainer');

    let groups = this.state.groups.map(group => {
      console.log(group.id);

      let handleClickClosure = () => {
        return this.handleGroupSelection(group.id)
      }

      return(
        <GroupInfo
          key={group.id}
          id={group.id}
          name={group.name}
          handleClick={handleClickClosure}
        />
      );
    });

    return (
      <div className="groups">
        <div className="left-nav">
          <h3>Groups</h3>
          <div className="group-divider" />
          <ul className="left-nav-ul">{groups}</ul>
          <Link className="create-group-btn" to={`/groups/new`}>
            <button onClick={this.handleStuff}>Create new group</button>
          </Link>
        </div>
        <div className="divider" />
        <ProductsContainer group={this.state.selectedGroup}/>
      </div>
    );
  }
}

export default GroupsIndexContainer;
