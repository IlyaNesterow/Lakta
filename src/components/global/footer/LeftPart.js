import React from 'react'
import Logo from '../Logo'
import { useSelector } from 'react-redux'
import { ContentContext } from '../../../utils/contexts'


const LaktaPart = () => {
  const lang = useSelector(state => state.lang)
  const theme = useSelector(state => state.theme)

  return(
    <div id="left-part">
      <Logo 
        fill={ theme ? '#eee' : "#333" }
        height="65pt"
        width="66pt"
      />
      <ContentContext.Consumer>
        {content =>  
          <p>{ content.footer.rightPart[lang] }</p>
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default LaktaPart