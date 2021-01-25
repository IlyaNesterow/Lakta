import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SubTitle = ({ icon, title }) => (
  <div id="sub-title">
    <FontAwesomeIcon icon={ icon }/>
    <h3>{ title }</h3>
  </div>
)

export default SubTitle