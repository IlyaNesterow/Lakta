import React from 'react'
import { useSelector } from 'react-redux'
import { ContentContext } from '../../../utils/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const MiddlePart = () => { 
  const lang = useSelector(state => state.lang)

  return(
    <div id="middle-part">
      <ContentContext.Consumer>
        {content => 
          <>
            <p>{ content.footer.repo[ lang ] }</p> 
            <div id="repository">
              <a 
                href="https://github.com/IlyaNesterow/Lakta"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faGithub }
                />
                { content.footer.source[ lang ] }
              </a>
            </div> 
          </>
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default MiddlePart