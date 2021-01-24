import React from 'react'
import Links from './Links'
import Toggler from './ThemeToggler'
import Nav from '../../../styles/navbar'
import { useSelector } from 'react-redux'
import MenuLabel from '../menu/MenuLabel'


const Navbar = () => {
  const theme = useSelector(state => state.theme)  
  
  return(
    <Nav darkTheme={ theme }>
      <p>Lakta</p>
      <MenuLabel/>
      <Links/>
      <Toggler/>
    </Nav>
  )
}


export default Navbar