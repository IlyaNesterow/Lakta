import React from 'react'
import Modal from './Modal'
import Portal from '../global/Portal'


const Main = (props) => {
  const keyDownHandler = e => {
    if(e.keyCode === 27)
      return props.onClose()
  }

  return(
    <Portal parent="modal">
      <div id="pic-modal"
        onKeyDown={ keyDownHandler }
      >
        <Modal { ...props }/>
      </div>
    </Portal>
  )
}

export default Main