/**
 * Created by rafael on 13.02.17.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import { reducer as displayUserDetailsReducer } from './main-view/state';
import { reducer as userNotFoundReducer } from './main-view/state/userNotFound';

const reducer = combineReducers({
  githubUserData: displayUserDetailsReducer,
  notFoundData: userNotFoundReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
  ), persistState(['notFoundData']),
);

const store = createStore(reducer, enhancer);

export default store;
