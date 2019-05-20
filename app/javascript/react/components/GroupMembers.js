import React from 'react';
import { Link } from 'react-router';

import GroupMember from './GroupMember'

const GroupMembers = (props) => {

  if (!props.group) {
    return null
  }

  let invitees = props.group.invitations.map(invitee => {
    return(
      <GroupMember
        key={invitee.id}
        email={invitee.email}
        status={invitee.status}
      />
    );
  });

  let user = props.group.users[0].email;

  return (
    <div className="members-container">
      <div className="group-divider"/>
      <h3>Members</h3>
      <div className="group-divider"/>
      {invitees}
      <div>{user} (you)</div>
    </div>
  );
}

export default GroupMembers;
