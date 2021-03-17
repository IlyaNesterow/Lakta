import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContentContext } from '../../../utils/contexts'


const Links = ({ lang, theme, onClick }) => {
  const generateLinks = (content) => 
    content.titles.map(el => 
      <div id="menu-link">
        <NavLink 
          exact
          activeStyle={{
            color: theme ? '#fff' : '#000'
          }}
          onClick={ onClick }
          to={ el.link }
          key={ el.link }
        >
          { el.content[ lang ] }
        </NavLink>
      </div>  
    )

  return(
    <div id="menu-links">
      <ContentContext.Consumer>
        {content =>
          generateLinks(content.navbar)
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default React.memo(Links)