/**
 * Created by rafael on 13.02.17.
 */
import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users
})

const DisplayUserDetails = props => (
  <div>
    <p>props.inputValue: {props.inputValue}</p>

    <p>Login: {props.users[0] ?
      props.users[props.users.length - 1].login : ''}
    </p>

    <p>Name: {(props.users[0] && props.users[props.users.length - 1].name !== null) ?
      props.users[props.users.length - 1].name :
      'none'}
    </p>

    <p>Company: {(props.users[0] && props.users[props.users.length - 1].company !== null) ?
      props.users[props.users.length - 1].company :
      'none'}
    </p>

    <p>E-mail: {(props.users[0] && props.users[props.users.length - 1].email !== null) ?
      props.users[props.users.length - 1].email :
      'none'}
    </p>

    <p>Gravatar: {(props.users[0] && props.users[props.users.length - 1].gravatar_id !== '') ?
      props.users[props.users.length - 1].gravatar_id :
      'none'}
    </p>

    <p>Followers: {(props.users[0] && props.users[props.users.length - 1].followers !== null) ?
      props.users[props.users.length - 1].followers :
      'none'}
    </p>

    <p>Following: {(props.users[0] && props.users[props.users.length - 1].following !== null) ?
      props.users[props.users.length - 1].following :
      'none'}
    </p>
  </div>
)

export default connect(mapStateToProps)(DisplayUserDetails)