/**
 * Created by rafael on 25.02.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const mapStateToProps = state => ({
  users: state.githubUserData.users,
});

const tableView = props => (
  <div>
    <h2>Table of users</h2>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Login</th>
          <th>Followers</th>
          <th>From</th>
        </tr>
      </thead>
      <tbody>
        {
        props.users.map(
          user => ({
            id: user.id,
            login: user.login,
            followers: user.followers,
            from: user.created_at,
          }),
        ).map(
          user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{user.followers}</td>
              <td>{user.from}</td>
            </tr>,
        )
      }
      </tbody>
    </Table>
  </div>
);
tableView.propTypes = {
  users: React.PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(tableView);
