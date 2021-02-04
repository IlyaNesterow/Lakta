import React from 'react'
import Modal from './Modal'
import Portal from '../global/Portal'


const Main = (props) => (
  <Portal parent="modal">
    <div id="pic-modal">
      <Modal { ...props }/>
    </div>
  </Portal>
)

export default Main