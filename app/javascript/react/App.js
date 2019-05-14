import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import ProductsContainer from './containers/ProductsContainer';
import ProductShow from './components/ProductShow';
import NavBar from './components/NavBar';

export const App = (props) => {
return(
  <Router history={browserHistory}>
    <Route path='/' component={NavBar}>
      <IndexRoute component={GroupsIndexContainer} />
      <Route path='/groups' component={GroupsIndexContainer} />
      <Route path='/products/:id' component={ProductShow} />

    </Route>
  </Router>
)
}

export default App;
