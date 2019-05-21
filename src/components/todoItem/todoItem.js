import React, { Component } from 'react'
import ShowPanel from './show'
import EditPanel from './edit'

class todoItem  extends Component {
  render() {
  const {
    index,
    id,
    text,
    time,
    completed,
    edit,
    deleteHandler,
    toggleHandler,
    editTodo,
    updateTodo
  } = this.props
  return(
    <div className='todoItem'>
      <ShowPanel
        index={index}
        id={id}
        text={text}
        time={time}
        completed={completed}
        edit={edit}
        deleteHandler={deleteHandler}
        toggleHandler={toggleHandler}
        editTodo={editTodo}
      />
      <EditPanel
        index={index}
        id={id}
        text={text}
        time={time}
        completed={completed}
        edit={edit}
        deleteHandler={deleteHandler}
        editTodo={editTodo}
        updateTodo = {updateTodo}
      />
    </div>
    )
  }
}
  
export default todoItem;