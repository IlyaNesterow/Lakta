import React from 'react'
import content from '../../../content/footer'
import { useSelector, useDispatch } from 'react-redux'
import change from '../../../redux/actions/lang' 


const Languages = () => {
  const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  const langs = content.languages.map(lng => 
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
    <div id="right-part">
      <p>{ content.languageChoice[ lang ] + ': ' }</p>
      <div id="languages">
        { langs }
      </div>
    </div>
  )
}

export default Languages