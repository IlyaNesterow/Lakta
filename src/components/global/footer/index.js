import React from 'react'
import { useSelector } from 'react-redux'

import FOOTER from '../../../styles/footer'
import Languages from './RighPart'
import MiddlePart from './MiddleElement'
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
        <MiddlePart/>
        <Languages/>
      </div> 
      <Copyright/>
    </FOOTER>
  )
}

export default Footer