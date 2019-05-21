// 定義action物件(描述state要做什麼處理)
import * as TodoActionTypes from '../actionTypes/todo'

//ADD
export const addTodo = (todo) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    todo
  }
}
//DELETE
export const deleteTodo = (id) => {
  return {
    type: TodoActionTypes.DELETE_TODO,
    id
  }
}
//CHECKBOX
export const toggleTodo = (id) => {
  return {
    type: TodoActionTypes.TOGGLE_TODO,
    id
  }
}
//EDIT
export const editTodo = (id) => {
  return {
    type: TodoActionTypes.EDIT_TODO,
    id
  }
}
//UPDATE
export const updateTodo = (todo) => {
  return {
    type: TodoActionTypes.UPDATE_TODO,
    todo
  }
}
//FILTER
export const listFilter = (filter) => {
  return {
    type: TodoActionTypes.LIST_FILTER,
    filter
  }
}