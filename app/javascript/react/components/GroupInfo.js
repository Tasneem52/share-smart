import React from 'react';
import { Link } from 'react-router';

const GroupInfo= (props) => {
 return (
     <div className="group-name-link">
       <li>
         <button className="group-name-btn" onClick={props.handleClick} >
           {props.name}
         </button>
       </li>

     </div>
 );
}

export default GroupInfo;
