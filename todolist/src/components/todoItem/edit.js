import React, { Component } from 'react'
import 'element-theme-default';
import { DatePicker } from 'element-react/next';

class EditPanel extends Component {
  state={
    editText: this.props.text,
    editDate: this.props.time
  }
  //更新輸入值
  setEditText = (e) => {
    this.setState({
      editText: e.target.value
    })
  }
  //更新狀態(to reducer)
  updateEdit = () => {
    const obj = {
      index: this.props.index,
      data: {
        todoText: this.state.editText,
        todoDate: this.state.editDate,
        id: this.props.id,
        completed: this.props.completed,
        edit: !this.props.edit, 
      }
    }
    this.props.editTodo(this.props.id)
    this.props.updateTodo(obj)
  }
  //取消編輯(to reducer)
  cancelEdit = () => {
    this.props.editTodo(this.props.id)
  }
  componentDidUpdate(){
    this.nameInput.focus();
  }
  render() {
    const { edit } = this.props
    return (
      <div className='edits' style={{display: edit ? 'block' : 'none'}}>
        <div className='edit-panel'>
          <div className='edit-text'>
            <input 
              className='edit-main' 
              value={this.state.editText} 
              onChange={this.setEditText}
              ref={(input) => { this.nameInput = input }} 
              placeholder='請輸入待辦事項'
            />
            <DatePicker
              value={this.state.editDate}
              placeholder="請選擇日期"
              format='yyyy-MM-dd'
              onChange={date=>{
                this.setState({
                  editDate: date
                })
              }}
              disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
            />
          </div>
          <div className='edit-icon'>
            <div 
              className='enter'
              onClick={this.updateEdit}
            >
              <div className='enter-icon'>
                <i className='fas fa-check'></i>
              </div>
            </div>
            <div 
              className='cancel'
              onClick={this.cancelEdit}
            >
              <div className='cancel-icon'>
                <i className='fas fa-times'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPanel