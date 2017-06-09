import React from 'react'
import { map } from 'ramda'
import TodoItem from './todo-item'

const TodoList = props => {
  return (
    <ul className="todo-list">
      {map(
        todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleCompleted={props.toggleCompleted}
          />
        ),
        props.todos
      )}
    </ul>
  )
}

export default TodoList
