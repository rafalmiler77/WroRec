import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
})

class App extends Component {
  constructor(){
    super()

this.state = {
      username: ''
}
this.handleSubmit = event => {
      event.preventDefault()
  this.setState({
    username: this.state.username
  })
}
  }
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <form>
        <input onSubmit={this.handleSubmit}
          value={this.state.username}
          type="text"
          onChange={
            event => this.setState({
              username: event.target.value
            })
          }
        />
          <button type="submit">Go!</button>
        </form>
        <h3>{this.state.username}</h3>

      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
