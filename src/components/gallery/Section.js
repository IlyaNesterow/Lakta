import React, { useState } from 'react'

import Modal from '../modal'
import ImageGroup from './Images'


const Section = ({ data, lang }) => {
  const [ currentImgInModal, setCurrentImgInModal ] = useState(null)
  const [ modalOpened, setModalOpened ] = useState(false)

  const imgClickHandler = (index) => {
    setModalOpened(true)
    setCurrentImgInModal(index)
  }

  const closeModal = () => {
    setModalOpened(false) 
    setCurrentImgInModal(null)
  }

  return(
    <>
      <h3>{ data.title[ lang ][0].toUpperCase() + data.title[ lang ].substring(1) }</h3>
      <ImageGroup
        pics={ data.pictures }
        imgOnClick={ imgClickHandler }
      />
      {modalOpened && currentImgInModal !== null &&
        <Modal
          images={ data.pictures }
          index={ currentImgInModal }
          onClose={ closeModal }
        />
      }
    </>
  )
}

export default Section
