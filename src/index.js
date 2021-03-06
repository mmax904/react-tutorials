import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './synchronous/reducers'
import App from './synchronous/components/App'
const store = createStore(rootReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)