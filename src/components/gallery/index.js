import React, { useState } from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/gallery'
import Scroller from './ScrollSomewhere'
import Modal from '../modal'
import ImageGroup from './Images'
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

  const getAllImages = (pictures) => {
    const allPictures = []

    for(let i in pictures)
      allPictures.push(...pictures[ i ])

    return allPictures
  }

  const generateContent = (data) => {
    const sections = []
    let startingPoint = 0
    for(const section in data.sections){
      const subtitle = data.sections[ section ][ lang ][0].toUpperCase() + data.sections[ section ][ lang ].substring(1)
      const output = (
        <>
          <h3>{ subtitle }</h3>
          <ImageGroup
            pics={ data.pictures[ section ] }
            imgOnClick={ imgClickHandler }
            startingPoint={ startingPoint }
          />
        </>
      )
      sections.push(output)
      startingPoint += data.pictures[ section ].length
    }

    return sections
  } 

  return(
    <Page
      darkTheme={ theme }
      id="page-section"
    >
      <h1>{ content.title[ lang ] }</h1>
      { generateContent(content) }
      <Scroller/>
      {modalOpened && currentImgInModal !== null &&
        <Modal
          images={ getAllImages(content.pictures) }
          index={ currentImgInModal }
          onClose={ closeModal }
        />
      }
    </Page>
  )
}

export default Main