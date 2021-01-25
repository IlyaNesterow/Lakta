import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SubField = ({ icon, fieldName, fieldValue }) => (
  <div id="sub-section">
    <FontAwesomeIcon icon={ icon }/>
    <p>
      <span id="sub-section-key">{ fieldName }</span>: { fieldValue }
    </p>
  </div>
)

export default SubField