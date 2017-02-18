/**
 * Created by rafael on 13.02.17.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as displayUserDetailsReducer } from './App/state';

const reducer = combineReducers({
  githubUserData: displayUserDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
  )
);

const store = createStore(reducer, enhancer);

export default store;
