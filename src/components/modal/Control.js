import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Control = ({ onClick, id, icon, className = 'modal-control' }) => (
  <div 
    onClick={ onClick }
    className={ className }
    id={ id } 
  >
   <FontAwesomeIcon icon={ icon }/>
  </div>
)

export default Control