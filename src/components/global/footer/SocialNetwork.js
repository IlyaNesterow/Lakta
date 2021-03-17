import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialNetwork = ({ url, icon }) => (
  <a 
    href={ url }
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={ icon }/>
  </a>
)

export default React.memo(SocialNetwork)