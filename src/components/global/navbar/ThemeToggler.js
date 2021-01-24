import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../../redux/actions/theme'


const Toggler = () => {
  const darkTheme = useSelector(state => state.theme)
  const dispatch = useDispatch()
  
  return(
    <label className="switch">
      <input 
        type="checkbox"
        checked={ darkTheme }
        onChange={() => dispatch(toggle())}
      />
      <div className="slider"></div>
    </label>
  )
}

export default Toggler