import React from 'react'
import Links from './Links'
import Toggler from './ThemeToggler'
import Nav from '../../../styles/navbar'
import { useSelector } from 'react-redux'
import MenuLabel from '../menu/MenuLabel'
import Logo from '../Logo'


const Navbar = () => {
  const theme = useSelector(state => state.theme)  
  
  return(
    <Nav darkTheme={ theme }>
      <Logo/>
      <MenuLabel/>
      <Links/>
      <Toggler/>
    </Nav>
  )
}


export default Navbar