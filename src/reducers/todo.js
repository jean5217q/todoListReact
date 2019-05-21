//處理新增與刪除的reducer
import * as TodoActionTypes from '../actionTypes/todo'

//將字串時間轉換成時間物件
function formateDate(date){
  let newDate = date
  newDate = newDate.split('T')
  let y = newDate[0].split('-')
  let t = newDate[1].split('.')[0].split(':')
  newDate = `${y[0]}/${y[1]}/${y[2]} ${t[0]}:${t[1]}:${t[2]}`
  return new Date(newDate)
}
//產生id
function generateId() {
  let id = new Date().toString()
  id = id.split(' ')
  id = `${id[3]}${id[1]}${id[2]}${id[0]}${id[4]}`
  return id
}
//排序(依照completed)
function sortTodo(todos) {
  let todoArray = todos
  todoArray.sort((a,b)=>{
    let todoA = a.completed ? 1000 : 0
    let todoB = b.completed ? 1000 : 0
    if(todoA>todoB) return 1
    else if(todoA<todoB) return -1
    else return 0
  })
  return todoArray
}
//localstrage
const storage = {
  get(){
    let todos = JSON.parse(localStorage.getItem('todos') || '[]')
    if(todos.length!==0) {
      todos.forEach(el=>el.todoDate=formateDate(el.todoDate))
    }
    return todos
  },
  set(todo){
    localStorage.setItem('todos',JSON.stringify(todo))
  }
}

//代辦事項的陣列
const todos = sortTodo(storage.get())





//關於代辦事項所有可能的method
export default function Todo(state=todos,action) {
  switch(action.type) {
    //新增
    case TodoActionTypes.ADD_TODO: {
      let todos = [
        ...state,
        {
          todoText: action.todo.input,
          todoDate: action.todo.time,
          id: generateId(action.todo.time),
          completed: false,
          edit: false
        }
      ]
      todos = sortTodo(todos)
      storage.set(todos)
      return todos
    }
    //刪除
    case TodoActionTypes.DELETE_TODO: {
      const todos = state.filter(el=>el.id!==action.id)
      storage.set(todos)
      return todos
    }  
    //TOGGLE
    case TodoActionTypes.TOGGLE_TODO: {
      let todos = state.map(todo=>{
        if(action.id===todo.id) {
          return {
            ...todo,
            completed: !todo['completed']
          }
        }
        return todo
      })
      todos = sortTodo(todos)
      storage.set(todos)
      return todos
    }
    //EDIT
    case TodoActionTypes.EDIT_TODO: {
      const todos = state.map(todo=>{
        if(action.id===todo.id) {
          return {
            ...todo,
            edit: !todo['edit']
          }
        }
        return todo
      })
      storage.set(todos)
      return todos
    }
    //UPDATE
    case TodoActionTypes.UPDATE_TODO: {
      state[action.todo.index] = action.todo.data
      storage.set(state)
      return state
    }

    //預設
    default: 
    return state
  }
  
}

//return 要是state
// 模板可以訪問所有reducer的dispatch / state.todo / state.link 訪問該js的state
