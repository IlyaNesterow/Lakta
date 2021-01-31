import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Links from '../navbar/Links'
import Portal from '../Portal'
import setOpened from '../../../redux/actions/menu'


const MenuTab = () => {
  const opened = useSelector(state => state.menu)
  const dispatch = useDispatch()
  
  return(
    <>
      {opened &&
        <Portal parent="navbar">
          <div id="menu-container">
            <Links 
              id="nav-link-area-tab" 
              navLinkId="nav-link-tab"
              onClick={() => dispatch(setOpened(false))}
            />
          </div>
        </Portal>
      }
    </>
  )
}

export default MenuTab