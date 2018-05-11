import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import select from './data'

export default combineReducers({
  routing: routerReducer,
  select
})
