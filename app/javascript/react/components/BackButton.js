import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = (props) => {
 return(
   <div className="back-button">
     <button onClick={browserHistory.goBack}>{props.text}</button>
   </div>
 )
}

export default BackButton;
