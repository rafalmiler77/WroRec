/**
 * Created by rafael on 13.02.17.
 */
const initialState = {
  inputValue: '',
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    default:
      return state;
  }
};
