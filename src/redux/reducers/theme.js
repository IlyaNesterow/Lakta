import types from '../types/theme'


const themeReducer = (state = window.localStorage.getItem('theme') === 'true', action) => {
  switch(action.type){
    case types.TOGGLE: 
      const newState = !state
      window.localStorage.setItem('theme', newState)
      return newState
    case types.SET_DEFAULT:
      window.localStorage.setItem('theme', action.darkTheme)
      return action.darkTheme
    default: return state
  }
}

export default themeReducer