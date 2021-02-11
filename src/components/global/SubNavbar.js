import React from 'react'
import { NavLink } from 'react-router-dom'


const SubNavbar = ({ content, lang, ctx = 'ctx' }) => {
  const generateLinks = (data) => 
    data.map(l => 
      <NavLink
        to={ `/${ l.url }` }
        key={ l.url }
        activeStyle={{
          color: '#2266ff',
          borderBottom: 'solid 1px #2266ff'
        }}
      >{
        l[ ctx ][ lang ].toUpperCase()
      }</NavLink>
    )
  
  return(
    <div id="sub-navbar">  
      { generateLinks(content) }
    </div>
  )
}

export default SubNavbar