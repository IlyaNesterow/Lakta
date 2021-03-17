import React, { useMemo, memo } from 'react'
import { NavLink } from 'react-router-dom'


const SubNavbar = ({ content, lang, ctx = 'ctx' }) => {
  const generateLinks = useMemo(() => 
    content.map(l => 
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
    ), [ content, lang, ctx ])
  
  return(
    <div id="sub-navbar">  
      { generateLinks }
    </div>
  )
}

export default memo(SubNavbar)