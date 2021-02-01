import React from 'react'
import { NavLink } from 'react-router-dom'

import { ContentContext } from '../../utils/contexts'


const SubNavbar = ({ lang }) => {
  const generateLinks = (data) => 
    data.links.map(l => 
      <NavLink
        to={ `/about/${ l.url }` }
        key={ l.url }
        activeStyle={{
          color: '#3355ff',
          borderBottom: 'solid 1px #3355ff'
        }}
      >{
        l.ctx[ lang ]
      }</NavLink>
    )

  return(
    <ContentContext.Consumer>
      {content => 
        <div id="sub-navbar"> 
          { generateLinks(content.about.subnavbar) }
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default SubNavbar