//連接listui與store的中介層
//list面板上會有刪除與打勾的動作
//list filter動作

//連接
import { connect } from 'react-redux'
//動作
import { deleteTodo, toggleTodo, editTodo, updateTodo } from '../action/todo'
//將store連到哪個component
import TodoList from '../components/todoList'

//過濾todo陣列
//過濾todo陣列
const filterTodo = (todos,path) => {
  if(path==='ALL') return todos;
  else if(path==='ACTIVED') return todos.filter(el=>!el.completed)
  else if(path==='COMPLETED') return todos.filter(el=>el.completed)
}
//要傳遞給TodoList組件的東西
//過濾完的todo陣列
const mapStateToProps = (state) => {
  return {
    todos: filterTodo(state.todos,state.filter)
  }
}
//刪除動作
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    editTodo: (id) => {
      dispatch(editTodo(id))
    },
    updateTodo: (todo) => {
      dispatch(updateTodo(todo))
    }
  }
}

//將action與TodoList組件連接並產出新組件
const ComputedList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default ComputedList