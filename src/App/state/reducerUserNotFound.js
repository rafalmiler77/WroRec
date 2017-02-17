/**
 * Created by rafael on 17.02.17.
 */
import { USER_NOT_FOUND } from './actionTypes';

const initialState = {
  usersNotFoundInStorage: [],
  userNotFound: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NOT_FOUND:
      return {
        ...state,
        userNotFound: true,
        userNotFoundToStorage: state.usersNotFoundInStorage.concat(action.user),

      };
    default:
      return state;
  }
};
