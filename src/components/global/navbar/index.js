import React from 'react'
import { Link } from 'react-router-dom'
import Links from './Links'
import Nav from '../../../styles/navbar'
import { useSelector } from 'react-redux'
import MenuLabel from '../menu/MenuLabel'
import LogoSection from './LogoSection'
import LanguagesAndTheme from '../LAndT'


const Navbar = () => {
  const theme = useSelector(state => state.theme)  
  
  return(
    <Nav darkTheme={ theme }>
      <Link to="/">
        <LogoSection/>
      </Link>
      <Links/>
      <MenuLabel/>
      <LanguagesAndTheme/>
    </Nav>
  )
}


export default Navbar