import React, { useState, useEffect } from 'react'
import Modal from '../components/modal'


const useModal = (images) => {
  const [ currentImgInModal, setCurrentImgInModal ] = useState(null)
  const [ modalOpened, setModalOpened ] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', closeModalByPressingEsc)
    return () => document.removeEventListener('keydown', closeModalByPressingEsc)
  }, [])
  
  const closeModalByPressingEsc = (e) => {
    if (e.keyCode == 27) 
      closeModal()
  }

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