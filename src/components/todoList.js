import React from 'react'
import TodoItem from './todoItem/todoItem'
//map在ul執行所以function要透過props傳給todoitem
//從store接回todos陣列render
const TodoList = ({todos,deleteTodo,toggleTodo,editTodo,updateTodo}) =>{
  return (
    <ul className='todo-list'>{
      todos.map((todo,index)=>
        <TodoItem
          index={index}
          key={index}
          id={todo.id}
          text={todo.todoText}
          time = {todo.todoDate}
          completed = {todo.completed}
          edit = {todo.edit}
          editTodo = {editTodo}
          deleteHandler = {deleteTodo}
          toggleHandler = {toggleTodo}
          updateTodo = {updateTodo}
        />
      )
    }</ul>
  )
}

export default TodoList