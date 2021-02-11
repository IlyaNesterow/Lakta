import React from 'react'


const SubField = ({ fieldName, fieldValue }) => (
  <div id="sub-section">
    <p>
      <span id="sub-section-key">
        { fieldName.toUpperCase() }
      </span>: { fieldValue.toUpperCase() }
    </p>
  </div>
)

export default SubField