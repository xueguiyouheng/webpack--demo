import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import home from './home'

const rootReducer = (history) => combineReducers({
  home,
  router: connectRouter(history)
})

export default rootReducer