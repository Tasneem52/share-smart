import React from 'react';

const GroupMember = (props) => {
  return(
    <div className="group-member">
      {props.email} ({props.status})
    </div>
  );
}

export default GroupMember;
