import React from 'react'
import { ContentContext } from '../../../utils/contexts'
import { useSelector, useDispatch } from 'react-redux'
import change from '../../../redux/actions/lang' 


const Languages = () => {
  const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  const generateLangs = (content) => 
    content.languages.map(lng => 
      <div
        onClick={() => {
          if(lang !== lng.abbr) dispatch(change(lng.abbr))
        }}
        key={ lng.abbr }
        className={ lng.abbr === lang ? 'current-lang' : '' }
      >
        { lng.content }
      </div>
    )  

  return(
    <ContentContext.Consumer>
      {content => 
        <div id="right-part">
          <p>{ content.footer.languageChoice[ lang ] + ': ' }</p>
          <div id="languages">
            { generateLangs(content.footer) }
          </div>
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default Languages