import React from 'react'
import { map, equals, always, filter, propEq, cond } from 'ramda'
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
            removeTodo={props.removeTodo}
          />
        ),
        cond([
          [equals('all'), always(props.todos)],
          [
            equals('active'),
            always(filter(propEq('completed', false), props.todos))
          ],
          [
            equals('completed'),
            always(filter(propEq('completed', true), props.todos))
          ]
        ])(props.filter)
      )}
    </ul>
  )
}

export default TodoList
