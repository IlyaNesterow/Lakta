import React from 'react'
import { useSelector } from 'react-redux' 

import Router from '../../router/GalleryPage'
import SubNavbar from '../global/SubNavbar'
import Page from '../../styles/gallery'
import Scroller from './ScrollSomewhere'
import { ContentContext } from '../../utils/contexts'


const Main = () => {
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  return(
    <ContentContext.Consumer>
      {content => 
        <Page
          darkTheme={ theme }
          id="page-section"
        >
          <h1>{ content.gallery.title[ lang ] }</h1>
          <Scroller/>
          <Router lang={ lang }>
            <SubNavbar
              lang={ lang }
              content={ content.gallery.sections }
              path="gallery"
              ctx="title" 
            />
          </Router>
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main