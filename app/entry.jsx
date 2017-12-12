import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './app.jsx'
import Redux from './redux/redux.js'
import mainReducer from './redux/reducers'
import mapDispatchToActions from './redux/actions'


const preloadedState = {
  settings: {
    isOpen: true
  }
}

const store = Redux.createStore(Redux.combineReducers(mainReducer), preloadedState)
const actions = mapDispatchToActions(store.dispatch)

window.reduxActions = actions
window.reduxStore = store

const startApp = () => {
  ReactDOM.render(<App store={store} actions={actions}/>, document.getElementById('root'))
}

document.addEventListener("DOMContentLoaded", startApp)
