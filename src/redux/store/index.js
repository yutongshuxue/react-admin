import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import routerReducer from '../reducers'

const store = createStore(composeWithDevTools(routerReducer))

export default store