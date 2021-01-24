import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import Links from './Links'
import Toggler from './ThemeToggler'
import Nav from '../../../styles/navbar'
import { useSelector } from 'react-redux'
import MenuLabel from '../menu/MenuLabel'


const Navbar = () => {
  const theme = useSelector(state => state.theme)  
  
  return(
    <Nav darkTheme={ theme }>
      <FontAwesomeIcon
        //will be replaces in future
        id="logo"
        icon={ faHammer }
      />
      <MenuLabel/>
      <Links/>
      <Toggler/>
    </Nav>
  )
}


export default Navbar