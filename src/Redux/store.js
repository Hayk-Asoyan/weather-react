import { createStore, combineReducers, applyMiddleware } from 'redux'
import { weatherReducer } from './weatherReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    header: weatherReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))