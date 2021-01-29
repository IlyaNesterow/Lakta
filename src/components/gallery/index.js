import React, { useState } from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/gallery'
import Scroller from './ScrollSomewhere'
import Modal from '../modal'
import Images from './Images'
import content from '../../content/gallery'


const Main = () => {
  const [ currentImgInModal, setCurrentImgInModal ] = useState(null)
  const [ modalOpened, setModalOpened ] = useState(false)

  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  const imgClickHandler = (index) => {
    setModalOpened(true)
    setCurrentImgInModal(index)
  }

  const closeModal = () => {
    setModalOpened(false) 
    setCurrentImgInModal(null)
  }

  return(
    <Page
      darkTheme={ theme }
      id="page-section"
    >
      <h1>{ content.title[ lang ] }</h1>
      <Images 
        pics={ content.pictures }
        imgOnClick={ imgClickHandler }
      />
      <Scroller/>
      {modalOpened && currentImgInModal !== null &&
        <Modal
          images={ content.pictures }
          index={ currentImgInModal }
          onClose={ closeModal }
        />
      }
    </Page>
  )
}

export default Main