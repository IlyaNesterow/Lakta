import React from 'react'
import { useSelector } from 'react-redux'
import Languages from './Languages'
import FOOTER from '../../../styles/footer'

const Footer = () => {
  const theme = useSelector(state => state.theme)

  return(
    <FOOTER darkTheme={ theme }>
      <Languages/>
    </FOOTER>
  )
}

export default Footer