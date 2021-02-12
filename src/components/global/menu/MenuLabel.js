import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import setOpened from '../../../redux/actions/menu'

 
const Menu = () => {
  const opened = useSelector(state => state.menu)
  const dispatch = useDispatch()

  return(
    <div 
      id="Menu"
      className={ opened ? 'closed' : 'opened' }
      onClick={() => dispatch(setOpened(!opened))}
    >
      <div id="top"></div>
      <div id="middle"></div>
      <div id="bottom"></div>
    </div>
  )
}

export default Menu