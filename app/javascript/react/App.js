import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import GroupsIndexContainer from './containers/GroupsIndexContainer';
//import ProductsContainer from './containers/ProductsContainer';

export const App = (props) => {
 return(
   <Router history={browserHistory}>
     <Route path='/' component={GroupsIndexContainer}>
       <IndexRoute component={GroupsIndexContainer} />
       <Route path='/groups' component={GroupsIndexContainer} />

     </Route>
   </Router>
 )
}

export default App;
