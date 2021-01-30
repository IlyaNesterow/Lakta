import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { ContentContext } from '../../../utils/contexts'


const Links = ({ id = 'nav-link-area', navLinkId = 'nav-link', onClick = () => {} }) => {
  const lang = useSelector(state => state.lang)
  
  const generateLinks = (content) => {
    return content.titles.map(el => 
      <NavLink 
        exact
        id={ navLinkId }
        activeStyle={{
          color: '#3355ff',
          fontWeight: '900'
        }}
        onClick={ onClick }
        to={ el.link }
        key={ el.link }
      >
        { el.content[ lang ] }
      </NavLink>  
    )
  }
  
  return(
    <div id={ id }>
      <ContentContext.Consumer>
        {content =>
          generateLinks(content.navbar)
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default Links