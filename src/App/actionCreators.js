/**
 * Created by rafael on 13.02.17.
 */
import { FETCH_USERS__BEGIN, FETCH_USERS__SUCCESS } from './actionTypes';

export const fetchUsersActionCreators = (actualInput) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS__BEGIN });

    fetch(
      `https://api.github.com/users/${actualInput}`,
    ).then(
      response => response.json(),
    ).then(
      user => dispatch({
        type: FETCH_USERS__SUCCESS,
        user,
      }),
    );
  };
};