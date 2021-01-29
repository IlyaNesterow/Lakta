import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialNetwork = ({ url, icon, id }) => (
  <a 
    href={ url }
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon
      icon={ icon }
      id={ id }
    />
  </a>
)

export default SocialNetwork