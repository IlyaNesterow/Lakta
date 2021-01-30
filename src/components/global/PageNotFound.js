import React from 'react'
import { ContentContext } from '../../utils/contexts'
import { useSelector } from 'react-redux'
import Page from '../../styles/404'


const Main = () => {
  const lang = useSelector(state => state.lang)
  const theme = useSelector(state => state.theme)

  return(
    <ContentContext.Consumer>
      {content => 
        <Page
          id="page-section"
          darkTheme={ theme }
        >
          <p>{ content.page_not_found[ lang ] }</p>
        </Page> 
      }
    </ContentContext.Consumer>
  )
}

export default Main