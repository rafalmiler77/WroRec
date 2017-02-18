/**
 * Created by rafael on 13.02.17.
 */
import { FETCH_USERS__BEGIN, FETCH_USERS__END, USER_NOT_FOUND } from './actionTypes';

const initialState = {
  inputValue: '',
  users: [],
  alreadyFetchedUser: '',
  pending: false,
  foundStatus: false,
  loginInStorage: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.inputValue,
        foundStatus: false,
        loginInStorage: false,
      };
    case 'ADD_EXISTING_USER':
      return {
        ...state,
        alreadyFetchedUser: action.exisitingUser,
      };
    case FETCH_USERS__BEGIN:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS__END:
      return {
        ...state,
        users: state.users.concat(action.user),
        pending: false,
      };
    case USER_NOT_FOUND:
      return {
        ...state,
        foundStatus: true,
      };
    case 'LOGIN_IN_STORAGE':
      return {
        ...state,
        loginInStorage: true,
      }
    default:
      return state;
  }
};
