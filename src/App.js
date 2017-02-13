import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FetchUsername } from './fetchUsername'
import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  contacts: state.usernameData.contacts
})
const mapDispatchToProps = dispatch => ({
  addInputValue: (username) => dispatch({type: 'ADD_INPUT_VALUE', inputValue: username})
})

class App extends Component {
  constructor(){
    super()

this.state = {
      inputValue: '',
}
    this.handleSubmit = event => {
      event.preventDefault()
      this.setState({
        inputValue: this.state.inputValue
      })
      // this.props.addInputValue(this.state.inputValue)
    }
  }
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValue}
          type="text"
          onChange={
            event => {
              this.setState({
                inputValue: event.target.value
              })
              this.props.addInputValue(this.state.inputValue)
            }
          }
        />
          <button type="submit">Go!</button>
        </form>
        <h3>{this.state.inputValue}</h3>
        <FetchUsername/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
