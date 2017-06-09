import React, { Component } from 'react'
import Header from './containers/header'
import ToggleAll from './containers/toggle-all'
import TodoList from './containers/todo-list'
import Footer from './containers/footer'
import { get, set } from './store'
import {
  append,
  ifElse,
  propEq,
  identity,
  assoc,
  compose,
  map,
  prop
} from 'ramda'

class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }
  addTodo(text) {
    this.setState(
      set({
        counter: this.state.counter + 1,
        todos: append(this.createTodo(text), this.state.todos)
      })
    )
  }
  createTodo(text) {
    return {
      id: this.state.counter + 1,
      text,
      completed: false
    }
  }
  toggleCompleted(id, completed) {
    const markComplete = ifElse(
      propEq('id', id),
      assoc('completed', !completed),
      identity
    )

    this.setState(
      compose(
        set,
        todos => ({ counter: this.state.counter, todos }),
        map(markComplete),
        prop('todos')
      )(this.state)
    )
  }
  componentDidMount() {
    this.setState(get())
  }
  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <main className="main">
          <ToggleAll />
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
          />
          <Footer />
        </main>
      </section>
    )
  }
}

export default App
