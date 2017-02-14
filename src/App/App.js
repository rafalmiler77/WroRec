import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DisplayUserDetails} from '../display-user-details-view'
import logo from '../logo.svg';
import './App.css';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users
})
const mapDispatchToProps = dispatch => ({
  addInputValue: (username) => dispatch({type: 'ADD_INPUT_VALUE', inputValue: username}),
  addUser: (user) => dispatch({type: 'ADD_USER', user: user})
})

class App extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: '',
    }
    this.handleOnChange = (actualInput) => {
      fetch(
        "https://api.github.com/users/" + actualInput
      ).then(
        response => response.json()
      ).then(
        data => {
          this.props.addUser(data)
        }
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>

        <form>
          <input
            value={this.state.inputValue}
            type="text"
            onChange={
              event => {
                this.setState({
                  inputValue: event.target.value
                })
                this.props.addInputValue(event.target.value)
                this.handleOnChange(event.target.value)
              }
            }
          />
        </form>
        <h3>{this.state.inputValue}</h3>
        <DisplayUserDetails/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
