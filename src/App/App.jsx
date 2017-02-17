import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import fetchUser from './state/actionCreators';
import DisplayUserDetails from '../display-user-details-view/DisplayUserDetails';
import './App.css';

const mapStateToProps = state => ({
  inputValue: state.githubUserData.inputValue,
  users: state.githubUserData.users,
  alreadyFetchedUser: state.githubUserData.alreadyFetchedUser,
  pending: state.githubUserData.pending,
  userNotFound: state.githubUserData.userNotFound,
});
const mapDispatchToProps = dispatch => ({
  addInputValue: username => dispatch({ type: 'ADD_INPUT_VALUE', inputValue: username }),
  informAboutAlreadyFetchedUser: exisitingUser => dispatch({ type: 'ADD_EXISTING_USER', exisitingUser }),
  dispatchFetchUsers: user => dispatch(fetchUser(user)),
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    let searchTimeout;
    this.handleOnChange = (actualInput) => {
      if (searchTimeout !== undefined) {
        clearTimeout(searchTimeout);
      }
      if (actualInput === '') {
        return;
      }
      (this.props.users !== null &&
      (this.props.users.find(
        user => user.login !== undefined &&
        user.login.toLowerCase() === actualInput.toLowerCase()))) ?
        this.props.informAboutAlreadyFetchedUser(actualInput)
        :
        searchTimeout = setTimeout(this.props.dispatchFetchUsers, 1000, actualInput);
    };
  }

  render() {
    return (
      <Grid fluid>
        <div className="Header">
          <h1>A connection to Github API in React</h1>
        </div>
        <Grid>
          <Well>
            <h3>Input a login of a GitHub user:</h3>
            <Row>
              <Col xs={6} md={3}>
                <form>
                  <input
                    value={this.state.inputValue}
                    type="text"
                    onChange={
                      (event) => {
                        this.setState({
                          inputValue: event.target.value,
                        });
                        this.props.addInputValue(event.target.value);
                        this.handleOnChange(event.target.value);
                      }
                    }
                  />
                </form>
              </Col>
              <Col xs={3}>
                {
                  this.props.pending === true ?
                    <p>Pending...</p> :
                    null
                }
              </Col>
            </Row>
            <Row className="additionalInfoRow">
              <Col className="additionalInfo">
                {
                  (this.props.alreadyFetchedUser !== '' &&
                  this.props.alreadyFetchedUser === this.state.inputValue) ?
                    <p>User with login &quot;{this.props.alreadyFetchedUser}&quot;
                      has been already fetched.</p> :
                    null
                }
              </Col>
              <Col className="additionalInfo">
                {
                  this.props.userNotFound === true ?
                    <p>Login &quot;{this.state.inputValue}&quot; does not exist.</p> :
                    null
                }
              </Col>
            </Row>
            <DisplayUserDetails />
          </Well>
        </Grid>
      </Grid>
    );
  }
}
App.propTypes = {
  users: React.PropTypes.array.isRequired,
  dispatchFetchUsers: React.PropTypes.func.isRequired,
  informAboutAlreadyFetchedUser: React.PropTypes.func.isRequired,
  addInputValue: React.PropTypes.func.isRequired,
  pending: React.PropTypes.bool.isRequired,
  userNotFound: React.PropTypes.bool.isRequired,
  alreadyFetchedUser: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
