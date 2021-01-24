import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import setOpened from '../../../redux/actions/menu'


const Menu = () => {
  const opened = useSelector(state => state.menu)
  const dispatch = useDispatch()

  return(
    <div id="Menu">
      <h2 
        className={ opened ? 'active' : 'normal' }
        onClick={() => dispatch(setOpened(!opened))}
      >
        Menu
      </h2>
    </div>
  )
}

export default Menu