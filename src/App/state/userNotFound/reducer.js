/**
 * Created by rafael on 17.02.17.
 */
import { USER_NOT_FOUND } from '../actionTypes';

const initialState = {
  usersNotFound: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NOT_FOUND:
      return {
        ...state,
        usersNotFound: state.usersNotFound.concat(action.user),
      };
    default:
      return state;
  }
};
