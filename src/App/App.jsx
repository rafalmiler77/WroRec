/**
 * Created by rafael on 25.02.17.
 */
import React from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { mainView } from '../main-view';
import './App.css';

const App = props => (
  <div>
    <Grid fluid>
      <div className="header">
        <h1>A connection to Github API in React</h1>
      </div>
    </Grid>
    <Grid>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/tableView">
              <NavItem eventKey={1}>Users table</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <mainView>
        {props.children}
      </mainView>
    </Grid>
  </div>

);
App.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default App;
