import React from 'react'
import TextField from '../components/text-field'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      txt: ''
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.addTodo(this.state.txt)
            this.setState({ txt: '' })
          }}
        >
          <TextField
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.txt}
            onChange={e => this.setState({ txt: e.target.value })}
          />
        </form>
      </header>
    )
  }
}

export default Header
