import { combineReducers, createStore } from 'redux'
import lang from './reducers/lang'
import theme from './reducers/theme'
import menu from './reducers/menu'

const rootReducer = combineReducers({ theme, lang, menu })

const store = createStore(rootReducer)

export default store