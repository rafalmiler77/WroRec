/**
 * Created by rafael on 13.02.17.
 */
import {createStore, combineReducers} from 'redux'
import {compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as displayUserDetailsReducer} from './App'

const reducer = combineReducers({
  usernameData: displayUserDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  )
)

const store = createStore(reducer, enhancer);

export default store