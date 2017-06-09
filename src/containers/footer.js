import React from 'react'

const Footer = props => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.remaining}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={e => props.clearCompleted()}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
