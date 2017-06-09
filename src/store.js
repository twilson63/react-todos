export const get = function() {
  const todos = window.localStorage.getItem('todoApp')
  return todos ? JSON.parse(todos) : { counter: 0, todos: [] }
}

export const set = function(state) {
  window.localStorage.setItem('todoApp', state)
  return state
}
