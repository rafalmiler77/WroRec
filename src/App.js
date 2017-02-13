import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

this.state = {
      name: ''
}
this.handleSubmit = event => {
      event.preventDefault()
  this.setState({
    name: this.state.name
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
          value={this.state.name}
          type="text"
          onChange={
            event => this.setState({
              name: event.target.value
            })
          }
        />
          <button type="submit">Go!</button>
        </form>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default App;
