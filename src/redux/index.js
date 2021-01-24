import { combineReducers, createStore } from 'redux'
import lang from './reducers/lang'
import theme from './reducers/theme'

const rootReducer = combineReducers({ theme, lang })

const store = createStore(rootReducer)

export default store