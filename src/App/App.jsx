import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayUserDetails } from '../display-user-details-view';
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
    this.handleOnChange = (actualInput) => {
      (this.props.users !== null &&
      (this.props.users.find(
        user => user.login === actualInput))) ?
        alert('This one exists already in store') :
        fetch(
          `https://api.github.com/users/${actualInput}`,
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
      <div className="App">
        <h1>A connection to Github API in React</h1>
        <h3>Input a login of a GitHub user:</h3>
        <form>
          <input
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
      </div>
    );
  }
}
App.propTypes = {
  users: React.PropTypes.string.isRequired,
  addUser: React.PropTypes.func.isRequired,
  addInputValue: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
