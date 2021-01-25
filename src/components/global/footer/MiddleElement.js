import React from 'react'
import { useSelector } from 'react-redux'
import content from '../../../content/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const MiddlePart = () => { 
  const lang = useSelector(state => state.lang)

  return(
    <div id="middle-part">
      <a 
        href="https://github.com/IlyaNesterow/Lakta"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={ faGithub }
        />
        { content.source[ lang ] }
      </a>
    </div>
  )
}

export default MiddlePart