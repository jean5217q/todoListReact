import style from '../style.css';
import React ,{ Component }from 'react';
import Header  from './header';
import TodoInput from './todoInput';
import ComputedList from '../container/computedList'
import { listFilter } from '../action/todo'
import { connect } from 'react-redux';

class App extends Component {
  getPathName = () => {
    const status = this.props.status
    if(status==='active') return 'ACTIVED'
    else if(status==='completed') return 'COMPLETED'
    else if(status==='all') return 'ALL'
  }
  componentDidMount() {
    this.props.dispatch(listFilter(this.getPathName()))
  }
  render() {
    return (
      <div className='app-wrap'>
        <Header/>
        <TodoInput/>
        <ComputedList/>
      </div>
      
    )
  }
}

export default connect()(App);
