import React from 'react'
import { useSelector } from 'react-redux' 
import Page from '../../styles/info-page'


const Main = () => {
  const theme = useSelector(state => state.theme)

  return(
    <Page darkTheme={ theme }>
      
    </Page>
  )
}

export default Main