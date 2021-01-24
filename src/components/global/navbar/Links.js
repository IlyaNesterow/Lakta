import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import content from '../../../content/navbar'


const Links = ({ id = 'nav-link-area', navLinkId = 'nav-link' }) => {
  const lang = useSelector(state => state.lang)
  
  const links = content.titles.map(el => 
    <NavLink 
      exact
      id={ navLinkId }
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
    <div id={ id }>
      { links }
    </div>
  )
}

export default Links