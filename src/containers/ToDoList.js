import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/ToDo'

const ToDoList = ({ todos }) => {

  const allTodos = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        text={todo.todo}
        id={todo.id}
        completed={todo.completed}
      />
    )
})

  return (
    <ul>
      {allTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)