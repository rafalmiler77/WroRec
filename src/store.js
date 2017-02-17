/**
 * Created by rafael on 13.02.17.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import { reducer as displayUserDetailsReducer } from './App';

const reducer = combineReducers({
  githubUserData: displayUserDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
  ), persistState(['githubUserData']),
);

const store = createStore(reducer, enhancer);

export default store;
