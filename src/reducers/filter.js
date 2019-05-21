import * as TodoActionTypes from '../actionTypes/todo'

export default function Filter(state='ALL',action) {
  switch(action.type) {
    case TodoActionTypes.LIST_FILTER : 
      return action.filter
    default:
      return state
  }
}