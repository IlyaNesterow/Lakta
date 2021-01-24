import types from '../types/theme'

export const toggle = () => {
  return {
    type: types.TOGGLE
  }
}

export const setDefault = (darkTheme) => {
  return {
    type: types.SET_DEFAULT,
    darkTheme
  }
}