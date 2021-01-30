import React from 'react'
import { useSelector } from 'react-redux'
import { faWhatsapp, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { ContentContext } from '../../../utils/contexts'
import SocialNetwork from './SocialNetwork'


const Networks = () => {
  const lang = useSelector(state => state.lang)

  const icons = {
    instagram: faInstagram,
    pinterest: faPinterest,
    whatsapp: faWhatsapp
  }

  const createIcons = (data) => {
    const output = []
    for(let app in data){
      const icon = 
        <SocialNetwork 
          icon={ icons[ app ] }
          id={ app }
          url={ data[ app ].url }
          key={ data[ app ].url }
        />
      output.push(icon)
    }
    return output
  }

  return(
    <ContentContext.Consumer>
      {content =>
        <div id="networks">
          <p>{ content.footer.connections[ lang ] }</p>
          <div id="networks-icons"> 
            { createIcons(content.footer.apps) }
          </div>
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default Networks