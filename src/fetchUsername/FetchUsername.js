/**
 * Created by rafael on 13.02.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users
})
const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch({type: 'ADD_USER', user: user})
})

class FetchUsername extends Component {
  constructor() {
    super()

    this.state = {
      githubUser: ''
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>this.props.inputValue: {this.props.inputValue}</p>

          <p>Login: {this.props.users[0] ?
            this.props.users[this.props.users.length-1].login : ''}
            </p>

          <p>Name: {(this.props.users[0] && this.props.users[this.props.users.length-1].name !== null) ?
            this.props.users[this.props.users.length-1].name :
            'none'}
          </p>

          <p>Company: {(this.props.users[0] && this.props.users[this.props.users.length-1].company !== null) ?
            this.props.users[this.props.users.length-1].company :
            'none'}
          </p>

          <p>E-mail: {(this.props.users[0] && this.props.users[this.props.users.length-1].email !== null) ?
            this.props.users[this.props.users.length-1].email :
            'none'}
          </p>

          <p>Gravatar: {(this.props.users[0] && this.props.users[this.props.users.length-1].gravatar_id !== '') ?
            this.props.users[this.props.users.length-1].gravatar_id :
            'none'}
          </p>

          <p>Followers: {(this.props.users[0] && this.props.users[this.props.users.length-1].followers !== null) ?
            this.props.users[this.props.users.length-1].followers :
            'none'}
          </p>

          <p>Following: {(this.props.users[0] && this.props.users[this.props.users.length-1].following !== null) ?
            this.props.users[this.props.users.length-1].following :
            'none'}
          </p>

        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FetchUsername)