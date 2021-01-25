import React from 'react'
import Logo from '../Logo'
import { useSelector } from 'react-redux'
import content from '../../../content/footer'


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
      <p>{ content.rightPart[lang] }</p>
    </div>
  )
}

export default LaktaPart