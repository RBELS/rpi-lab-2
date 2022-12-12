import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import dataReducer from './reducers/dataReducer/dataReducer'

const reducers = dataReducer

const store = createStore(reducers, composeWithDevTools())

export default store