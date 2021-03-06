import { createStore, applyMiddleware } from 'redux'
// import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default store