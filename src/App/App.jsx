import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Grid } from 'react-bootstrap';
import DisplayUserDetails from '../display-user-details-view/DisplayUserDetails';
import './App.css';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users,
});
const mapDispatchToProps = dispatch => ({
  addInputValue: username => dispatch({ type: 'ADD_INPUT_VALUE', inputValue: username }),
  addUser: user => dispatch({ type: 'ADD_USER', user }),
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    let searchTimeout;
    this.handleOnChange = () => {
      if (searchTimeout !== undefined) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(this.fetchUsers, 1000);
    };
    this.fetchUsers = () => {
      (this.props.users !== null &&
      (this.props.users.find(
        user => user.login === this.state.inputValue))) ?
        alert('This one exists already in store') :
        fetch(
          `https://api.github.com/users/${this.state.inputValue}`,
        ).then(
          response => response.json(),
        ).then(
          (data) => {
            this.props.addUser(data);
          },
        ).catch(
          error => console.error(error),
        );
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
  addUser: React.PropTypes.func.isRequired,
  addInputValue: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
