import React from 'react'
import { useSelector } from 'react-redux'

import FOOTER from '../../../styles/footer'
import Languages from './LeftPart'
import MiddlePart from './MiddleElement'
import RightPart from './LaktaPart'


const Footer = () => {
  const theme = useSelector(state => state.theme)

  return(
    <FOOTER darkTheme={ theme }>
      <RightPart/>
      <MiddlePart/>
      <Languages/>
    </FOOTER>
  )
}

export default Footer