//合併多個reducer
import { combineReducers } from 'redux'
//引入所有reducer
import todos from './todo'
import filter from './filter'

const toDoApp = combineReducers({
  todos,
  filter
})

export default toDoApp