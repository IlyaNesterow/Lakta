import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ContentContext } from '../../utils/contexts'
import change from '../../redux/actions/lang'
import Container from '../../styles/languages'


const Languages = () => {
  const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  const generateLangs = (content) => 
    content.map(lng => 
      <div
        onClick={() => {
          if(lang !== lng) dispatch(change(lng))
        }}
        key={ lng }
        className={ lng === lang ? 'current-lang' : '' }
      >
        { lng.toUpperCase() }
      </div>
    )  

  return(
    <ContentContext.Consumer>
      {content => 
        <Container>
          { generateLangs(content.availableLanguages) }
        </Container>
      }
    </ContentContext.Consumer>
  )
}

export default Languages