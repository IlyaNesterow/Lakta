import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' 

import Router from '../../router/GalleryPage'
import SubNavbar from '../global/SubNavbar'
import Page from '../../styles/gallery'
import Scroller from './ScrollSomewhere'
import { ContentContext } from '../../utils/contexts'


const Main = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  return(
    <ContentContext.Consumer>
      {content => 
        <Page
          darkTheme={ theme }
          id="page-section"
        >
          <h1>{ content.gallery.title[ lang ].toUpperCase() }</h1>
          <Scroller/>
          <Router lang={ lang }>
            <SubNavbar
              lang={ lang }
              content={ content.gallery.sections }
              ctx="title" 
            />
          </Router>
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main