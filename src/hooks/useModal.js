import React, { useState } from 'react'
import Modal from '../components/modal'


const useModal = (images) => {
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
  
  let component
  modalOpened && currentImgInModal !== null 
    ? component = <Modal
                    images={ images }
                    index={ currentImgInModal }
                    onClose={ closeModal }
                  />
    : component = null
  
  return [ imgClickHandler, component ]
}

export default useModal