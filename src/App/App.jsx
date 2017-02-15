import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Grid } from 'react-bootstrap';
import fetchUsersActionCreators from './actionCreators';
import DisplayUserDetails from '../display-user-details-view/DisplayUserDetails';
import './App.css';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users,
  alreadyFetchedUser: state.usernameData.alreadyFetchedUser,
});
const mapDispatchToProps = dispatch => ({
  addInputValue: username => dispatch({ type: 'ADD_INPUT_VALUE', inputValue: username }),
  informAboutAlreadyFetchedUser: exisitingUser => dispatch({ type: 'ADD_EXISTING_USER', exisitingUser }),
  fetchUsers: user => dispatch(fetchUsersActionCreators(user)),
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
    let searchTimeout;
    this.handleOnChange = (actualInput) => {
      if (searchTimeout !== undefined) {
        clearTimeout(searchTimeout);
      }
      (this.props.users !== null &&
        (this.props.users.find(
          user => user.login === actualInput))) ?
           this.props.informAboutAlreadyFetchedUser(actualInput)
        :
      searchTimeout = setTimeout(this.props.fetchUsers, 1000, actualInput);
    };
  }

  render() {
    return (
      <Grid fluid>
        <div className="Header">
          <h1>A connection to Github API in React</h1>
        </div>
        <Grid>
          <Well>
            <h3>Input a login of a GitHub user:</h3>
            <form>
              <input
                id="gitform"
                value={this.state.inputValue}
                type="text"
                onChange={
                (event) => {
                  this.setState({
                    inputValue: event.target.value,
                  });
                  this.props.addInputValue(event.target.value);
                  this.handleOnChange(event.target.value);
                }
                }
              />
            </form>

            <DisplayUserDetails />
          </Well>
        </Grid>
      </Grid>
    );
  }
}
App.propTypes = {
  users: React.PropTypes.array.isRequired,
  fetchUsers: React.PropTypes.func.isRequired,
  informAboutAlreadyFetchedUser: React.PropTypes.func.isRequired,
  addInputValue: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
