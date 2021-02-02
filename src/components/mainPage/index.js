import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ContentContext } from '../../utils/contexts'
import Page from '../../styles/mainPage'
import BgImage from './BgImage'
import Images from './Images'


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
          currentImg={ content.main.slider.bgImage } 
        >
          <BgImage/>
          <p id="summary">
            { content.main.intro[ lang ] }
          </p>
          <Images pics={ content.main.images } />
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main