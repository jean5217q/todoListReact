import React, { Component } from 'react' //引入react
import { connect } from 'react-redux'; //讓組件與reducer產生關聯
import { addTodo } from '../action/todo' //呼叫用的action
import 'element-theme-default'; //引入ui套件
import { DatePicker } from 'element-react/next'; //引入ui套件的日期套件

//DISPATCH為物件要在function中執行
//state牽涉資料同步綁定不得為null
class TodoInput extends Component {
  state = {
    input: '',
    time: null,
  }
  //更新輸入值
  inputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  //添加項目(to reducer)
  addSubmit = () => {
    if(!this.state.input||!this.state.time) return
    let obj = {
      input: this.state.input,
      time: this.state.time
    }
    this.props.dispatch(addTodo(obj))
    this.setState({
      input: '',
      time: null
    }) 
    this.nameInput.focus();
  }
  //取消項目
  cancelSubmit = () => {
    this.setState({
      input: '',
      time: null
    })
  }
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return (
      <div className='todoWrap'>
        <input 
          type='text'
          className='todo-input' 
          placeholder='輸入代辦事項'
          value = {this.state.input}
          onChange = {this.inputChange}
          ref={(input) => { this.nameInput = input}} 
        />
        <div className='input-wrap'>
          <DatePicker
            className='date-picker'
            value={this.state.time}
            placeholder="請選擇日期"
            format='yyyy-MM-dd'
            onChange={date=>{
              this.setState({
                time: date
              })
            }}
            disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
          />
          <button 
            className='submit main-btn'
            onClick={this.addSubmit}
            >
            提交
          </button>
          <button 
            className='cancel main-btn'
            onClick={this.cancelSubmit}
            >
            取消
          </button>
        </div>
      </div> 
    )
  }
}


export default connect()(TodoInput);
