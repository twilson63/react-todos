import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'todomvc-app-css/index.css'
//import Example from './example'

/** to get started swap the Example component for the App component **/

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
