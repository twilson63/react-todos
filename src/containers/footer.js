import React from 'react'

const Footer = props => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.remaining}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={`${props.filter === 'all' && 'selected'}`}
            href="#"
            onClick={e => props.setFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={`${props.filter === 'active' && 'selected'}`}
            href="#"
            onClick={e => props.setFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={`${props.filter === 'completed' && 'selected'}`}
            href="#"
            onClick={e => props.setFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={e => props.clearCompleted()}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
