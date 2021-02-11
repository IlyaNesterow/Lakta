import React from 'react'
import { useSelector } from 'react-redux'

import FOOTER from '../../../styles/footer'
import RightPart from './LeftPart'
import Networks from './SocialNetworks'
import Copyright from './Copyright'


const Footer = () => {
  const theme = useSelector(state => state.theme)

  return(
    <FOOTER darkTheme={ theme }>
      <div id="upper-pannel">  
        <RightPart/>
        <Networks/>  
      </div> 
      <Copyright/>
    </FOOTER>
  )
}

export default Footer