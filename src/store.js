/**
 * Created by rafael on 13.02.17.
 */
import { createStore, combineReducers } from 'redux'
import { compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  )
)

const store = createStore(reducer, enhancer);

export default store