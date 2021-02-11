import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/info-page'
import { ContentContext } from '../../utils/contexts'
import SubSection from './SubSection'
 
 
const Main = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  const generateSections = (content) => 
    content.map((item, index) => 
      <SubSection
        fieldName={ item[lang] }
        fieldValue={ item.field }
        key={ index + item.field } 
      />
    ) 
 
  return(
    <ContentContext.Consumer>
      {content => 
        <Page 
          id="page-section"
          darkTheme={ theme }
          imageUrl={ content.info.bgImage }
        >
          <h1>{ content.info.title[ lang ].toUpperCase() }</h1>
          <h3>{ content.info.subtitle[ lang ].toUpperCase() }</h3>
          { generateSections(content.info._info) }
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main