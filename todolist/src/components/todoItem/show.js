import React, { Component } from 'react'

class ShowPanel extends Component{
  //將時間物件轉為文字2018/10/12
  formateTime = (date) => {
    let time = date.toString().split(' ').splice(1,3)
    let month = time[0]
    const monthArray = 
    [ 'Jan', 'Feb', 'Mar', 
      'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 
      'Oct', 'Nov', 'Dec'
    ]
    monthArray.forEach((el,index)=>{
      if(el===month) month = index+1
    })
    time = `${time[2]}/${month}/${time[1]}`
    return time
  }
  render(){
    const {
      id,
      text,
      time,
      completed,
      edit,
      deleteHandler,
      toggleHandler,
      editTodo
    } = this.props
    return (
      <div className='show' style={{display: edit ? 'none' : 'block'}}>
        <div className='show-panel'>
          <label className={`show-check-label ${completed? 'checked': 'null'}`}>
            <input 
              type='checkbox'
              checked = {completed}
              onChange = {()=>toggleHandler(id)}
            />
          </label>
          <div className='text-wrap'>
            <div 
              className={`main-text ${completed?'done': 'null'}`}
              >{text}
            </div>
            <div className='date'>{this.formateTime(time)}</div>
          </div>
          <div className='show-btn-wrap'>
            <div 
              onClick={()=>editTodo(id)}
              className='edit'
              >
              <i className='i fas fa-pencil-alt'></i>
            </div>
            <div 
              onClick={()=>deleteHandler(id)}
              className='delete'
              >
              <i className='i far fa-trash-alt'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPanel

