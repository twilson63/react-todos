import { isNil } from 'ramda'

export const get = function() {
  const state = window.localStorage.getItem('todoApp')
  return isNil(state) ? { counter: 0, todos: [] } : JSON.parse(state)
}

export const set = function(state) {
  window.localStorage.setItem('todoApp', JSON.stringify(state))
  return state
}
