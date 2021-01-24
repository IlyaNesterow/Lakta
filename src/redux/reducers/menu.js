import types from '../types/menu'


const menuReducer = (state = false, action) => {
  switch(action.type){
    case types.SET: return action.opened
    default: return state
  }
}

export default menuReducer