import React from 'react'
import { connect } from 'react-redux'
import { toggleToDoCompleted } from '../actions'

const Todo = ({ text, id, completed, completeToDo}) => {
  return (
    <li id={id}>
      <h3>{text}</h3>
      <input type='checkbox' completed={completed.toString()} className={ completed ? 'completed' : 'not-completed'} onClick={() => completeToDo(id)}/>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  completeToDo: id => dispatch(toggleToDoCompleted(id))
})

export default connect(null, mapDispatchToProps)(Todo)