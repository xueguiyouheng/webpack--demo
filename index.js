import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/App.js'
import configureStore, { history } from './src/configureStore'

let store = configureStore()
render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
// Hot reloading
if (module.hot) {
  module.hot.accept('./src/App', () => {
    render()
  })
}