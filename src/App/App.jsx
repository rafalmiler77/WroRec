/**
 * Created by rafael on 25.02.17.
 */
import React from 'react';
import { Grid } from 'react-bootstrap';
import { mainView } from '../main-view';

const App = props => (
  <Grid fluid>
    <div className="Header">
      <h1>A connection to Github API in React</h1>
    </div>
    <mainView>{props.children}</mainView>
  </Grid>

);
App.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default App;
