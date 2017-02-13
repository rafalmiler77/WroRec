/**
 * Created by rafael on 13.02.17.
 */
const initialState = {
  username: '',
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERNAME':
      return {
        ...state,
        username: action.username,
        users: state.users.concat([{username:action.username}])

      }
    default:
      return state
  }
}