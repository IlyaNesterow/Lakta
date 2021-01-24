import types from '../types/lang'


const langReducer = (state = 'lv', action) => {
  switch(action.type){
    case types.CHANGE: 
      const newState = action.lang.toLowerCase()
      window.localStorage.setItem('lang', newState)
      return newState
    default: return state
  }
}

export default langReducer