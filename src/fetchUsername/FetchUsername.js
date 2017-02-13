/**
 * Created by rafael on 13.02.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state =>({
  inputValue: state.usernameData.inputValue
})
const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch({type: 'ADD_USER', user: user})
})

class FetchUsername extends Component {
constructor(){
  super()

  this.state = {
   githubUser: ''
  }
  this.handleSubmit2 =() => {
    fetch(
      "https://api.github.com/users/octocat"
    ).then(
      response => response.json()
    ).then(
      data => {
        this.setState({
          githubUser: data
        })
        this.props.addUser(this.state.githubUser)
      }
    )
  }

}

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit2} type="submit">Fetch users2!</button>
        <button onClick={this.handleSubmit3} type="submit">Fetch users3!</button>
        <div>
          {this.state.githubUser.name !== null ?
            <p>Name: {this.state.githubUser.name}</p> :
            <p>Name: none</p>
          }
          {this.state.githubUser.company !== null ?
            <p>Company: {this.state.githubUser.company}</p> :
            <p>Company: none</p>
          }
          {this.state.githubUser.email !== null ?
            <p>Email: {this.state.githubUser.email}</p> :
            <p>Email: none</p>
          }
          {this.state.githubUser.gravatar_id !== '' ?
            <p>Gravatar: {this.state.githubUser.gravatar_id}</p> :
            <p>Gravatar: none</p>
          }
            <p>Followers: {this.state.githubUser.followers}</p>
            <p>Following: {this.state.githubUser.following}</p>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FetchUsername)