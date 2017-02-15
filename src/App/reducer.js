/**
 * Created by rafael on 13.02.17.
 */
import { FETCH_USERS__BEGIN, FETCH_USERS__SUCCESS } from './actionTypes';

const initialState = {
  inputValue: '',
  users: [],
  alreadyFetchedUser: '',
  pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.inputValue,
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
    case FETCH_USERS__SUCCESS:
      return {
        ...state,
        users: state.users.concat(action.user),
        pending: false,
      };
    default:
      return state;
  }
};
