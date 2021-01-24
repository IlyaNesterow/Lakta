import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import content from '../../../content/navbar'


const Links = () => {
  const lang = useSelector(state => state.lang)
  
  const links = content.titles.map(el => 
    <NavLink 
      exact
      id="nav-link"
      activeStyle={{
        color: '#3377ff'
      }}
      to={ el.link }
      key={ el.link }
    >
      { el.content[ lang ] }
    </NavLink>  
  )
  
  return(
    <div id="nav-link-area">
      { links }
    </div>
  )
}

export default Links