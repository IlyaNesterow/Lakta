import types from '../types/menu'

const setOpened = (opened) => {
  return {
    type: types.SET,
    opened
  }
}

export default setOpened