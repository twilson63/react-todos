import React from 'react'

const TodoItem = props => {
  return (
    <li className={`${props.completed ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={e => props.toggleCompleted(props.id, props.completed)}
          checked={props.completed}
        />
        <label>{props.text}</label>
        <button
          className="destroy"
          onClick={e => {
            e.preventDefault()
            if (window.confirm('Are you Sure?')) {
              props.removeTodo(props.id)
            }
          }}
        />
      </div>
    </li>
  )
}

export default TodoItem
