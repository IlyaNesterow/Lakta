import React from 'react'
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import Control from './Control'


const ZoomBar = ({ onZoomIn, onZoomOut, unableToZoomOut, unableToZoomIn }) => (
  <div id="zoom-bar">
    <Control
      className={`zoom-bar-item ${ unableToZoomIn ? 'disabled' : 'enabled' }`}
      id="zoom-in"
      icon={ faSearchPlus }
      onClick={ onZoomIn }
    />
    <Control
      className={`zoom-bar-item ${ unableToZoomOut ? 'disabled' : 'enabled' }`}
      id="zoom-in"
      icon={ faSearchMinus }
      onClick={ onZoomOut }
    />
  </div>
)

export default React.memo(ZoomBar)