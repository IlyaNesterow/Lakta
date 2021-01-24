import React from 'react'
import { useSelector } from 'react-redux'

import Links from '../navbar/Links'
import Portal from '../Portal'


const MenuTab = () => {
  const opened = useSelector(state => state.menu)
  
  return(
    <>
      {opened &&
        <Portal parent="navbar">
          <Links id="nav-link-tab"/>
        </Portal>
      }
    </>
  )
}

export default MenuTab