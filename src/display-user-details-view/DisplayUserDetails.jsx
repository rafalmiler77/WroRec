/**
 * Created by rafael on 13.02.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

const mapStateToProps = state => ({
  inputValue: state.usernameData.inputValue,
  users: state.usernameData.users,
});

const DisplayUserDetails = props => (
  <Grid>
    <Row>
      <h3>Details of a user:</h3>
      <Col xs={2}>
        <p>Login: </p>
        <p>Name: </p>
        <p>Company: </p>
        <p>E-mail: </p>
        <p>Gravatar: </p>
        <p>Followers: </p>
        <p>Following: </p>
      </Col>
      {
      (props.users && props.inputValue) ?
        props.users.filter(
          user => user.login !== undefined &&
          user.login.toLowerCase() === props.inputValue.toLowerCase(),
        ).map(
          detail =>
            <Col key={detail.id}>
              <p>{detail.login}</p>
              <p>{detail.name !== null ? detail.name : 'None'}</p>
              <p>{detail.company !== null ? detail.company : 'None'}</p>
              <p>{detail.email !== null ? detail.email : 'None'}</p>
              <p>{detail.gravatar_id !== '' ? detail.gravatar_id : 'None'}</p>
              <p>{detail.followers}</p>
              <p>{detail.following}</p>
            </Col>) :
        null
      }
    </Row>
  </Grid>
);
DisplayUserDetails.propTypes = {
  users: React.PropTypes.array.isRequired,
  inputValue: React.PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(DisplayUserDetails);

