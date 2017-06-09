import React from 'react'

const TodoItem = props => {
  return (
    <li className={`${props.completed ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={e => props.toggleCompleted(props.id, props.completed)}
          value={props.completed}
        />
        <label>{props.text}</label>
        <button className="destroy" />
      </div>
    </li>
  )
}

export default TodoItem
