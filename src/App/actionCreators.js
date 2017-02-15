/**
 * Created by rafael on 13.02.17.
 */
import { FETCH_USERS__BEGIN, FETCH_USERS__SUCCESS, USER_NOT_FOUND } from './actionTypes';

const fetchUsersActionCreators = actualInput =>
   (dispatch) => {
     dispatch({ type: FETCH_USERS__BEGIN });

     fetch(
      `https://api.github.com/users/${actualInput}`,
    ).then(
       (response) => {
         if (response.status === 404) {
           dispatch({
             type: USER_NOT_FOUND,
           });
           return false;
         }
         else {
           return response.json();
         }
       },
     ).then(
      user => dispatch({
        type: FETCH_USERS__SUCCESS,
        user,
      }),
    );
   };

export default fetchUsersActionCreators;
