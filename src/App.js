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
  prop,
  length,
  reject
} from 'ramda'

class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      filter: 'all',
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleAllCompleted = this.toggleAllCompleted.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
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
  toggleAllCompleted() {
    this.setState(
      compose(
        set,
        todos => ({ counter: this.state.counter, todos }),
        map(assoc('completed', true)),
        prop('todos')
      )(this.state)
    )
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
  remaining() {
    return length(reject(propEq('completed', true), this.state.todos))
  }
  clearCompleted() {
    this.setState(
      compose(
        set,
        todos => ({ counter: this.state.counter, todos }),
        reject(propEq('completed', true))
      )(this.state.todos)
    )
  }
  setFilter(value) {
    this.setState({
      filter: value
    })
  }
  removeTodo(id) {
    this.setState(
      compose(
        set,
        todos => ({ counter: this.state.counter, todos }),
        reject(propEq('id', id))
      )(this.state.todos)
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
          <ToggleAll toggleAllCompleted={this.toggleAllCompleted} />
          <TodoList
            filter={this.state.filter}
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            removeTodo={this.removeTodo}
          />
          <Footer
            setFilter={this.setFilter}
            filter={this.state.filter}
            remaining={this.remaining()}
            clearCompleted={this.clearCompleted}
          />
        </main>
      </section>
    )
  }
}

export default App
