import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../../styles/mainPage'


const Main = () => {
  const theme = useSelector(state => state.theme)
  //const lang = useSelector(state => state.lang)
 
  return( 
    <Page
      id="page-section"
      darkTheme={ theme }
    >
     
    </Page>
  )
}

export default Main