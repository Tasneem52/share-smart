import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import GroupsIndexContainer from './containers/GroupsIndexContainer';

export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/groups' component={GroupsIndexContainer} />
    </Router>
 )
}

export default App;
