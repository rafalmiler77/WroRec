/**
 * Created by rafael on 13.02.17.
 */
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users,
});

const DisplayUserDetails = props => (
  <div>
    {
      (props.users !== undefined && props.inputValue) ?
        props.users.filter(
          user => user.login === props.inputValue,
        ).map(
          detail =>
            <div key={detail}>
              <h3>Details of a user:</h3>
              <p>Login: {detail.login}</p>
              <p>Name: {detail.name !== null ? detail.name : 'None'}</p>
              <p>Company: {detail.company !== null ? detail.company : 'None'}</p>
              <p>E-mail: {detail.email !== null ? detail.email : 'None'}</p>
              <p>Gravatar: {detail.gravatar_id !== '' ? detail.gravatar_id : 'None'}</p>
              <p>Followers: {detail.followers}</p>
              <p>Following: {detail.following}</p>
            </div>) :
        <div>
          <h3>Details of a user:</h3>
          <p>Login: </p>
          <p>Name: </p>
          <p>Company: </p>
          <p>E-mail: </p>
          <p>Gravatar: </p>
          <p>Followers: </p>
          <p>Following: </p>
        </div>
    }
  </div>
);
DisplayUserDetails.propTypes = {
  users: React.PropTypes.array.isRequired,
  inputValue: React.PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(DisplayUserDetails);

