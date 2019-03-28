import React ,{ Component } from 'react';
import { NavLink } from 'react-router-dom'
import { listFilter } from '../action/todo'
import { connect } from 'react-redux';

class Header extends Component {
  clickHandler = (e) => {
    console.log(window.location.pathname)
    console.log('e')
    // this.props.dispatch(listFilter(this.state.input))
  }
  render() {
    const { dispatch } = this.props
    return (
      <header>
        <ul className='nav-list'>
          <li>
            <NavLink 
              exact
              to='/'
              className='todo-link'>全部
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/active'
              className='todo-link'>未完成
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/completed'
              className='todo-link'>已完成
            </NavLink>
          </li>
        </ul>
      </header>
    )
  }
}

export default connect()(Header);