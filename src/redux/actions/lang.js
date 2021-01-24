import types from '../types/lang'

const change = (lang) => {
  return {
    type: types.CHANGE,
    lang
  }
}

export default change