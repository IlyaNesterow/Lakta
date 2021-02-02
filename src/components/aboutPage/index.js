import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/aboutPage'
import Router from '../../router/AboutPage'
import SubNavbar from '../global/SubNavbar'
import { ContentContext } from '../../utils/contexts'


const Main = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  return(
    <ContentContext.Consumer>
      {content => 
        <Page 
          id="page-section"
          darkTheme={ theme }
        >
          <h1>{ content.about.title[ lang ] }</h1>
          <Router 
            lang={ lang }
            theme={ theme }
          >
            <SubNavbar 
              lang={ lang }
              content={ content.about.subnavbar.links }
              path="about"
            />
          </Router>
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main