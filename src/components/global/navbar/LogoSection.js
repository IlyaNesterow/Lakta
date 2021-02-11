import React from 'react'
import { useSelector } from 'react-redux'

import Logo from '../Logo'
import { ContentContext } from '../../../utils/contexts'


const LogoSection = () => {
  const lang = useSelector(state => state.lang)
 
  return(
    <ContentContext.Consumer>
      {content => 
        <div id="logo-section">
          <Logo
            height="60pt"
            width="61pt"
            fill="#888"
          />
          <p> 
            { content.navbar.logoSection[ lang ].split(' ').slice(0, 2).join(' ').toUpperCase() }
            <span id="company-name"> 
              { ' ' + (content.navbar.logoSection[ lang ].split(' ').pop().toUpperCase() || ' ') }
            </span> 
          </p>
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default LogoSection