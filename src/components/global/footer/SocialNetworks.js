import React from 'react'
import { faWhatsapp, faPinterest, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { ContentContext } from '../../../utils/contexts'
import SocialNetwork from './SocialNetwork'


const Networks = () => {
  const icons = {
    instagram: faInstagram,
    pinterest: faPinterest,
    whatsapp: faWhatsapp,
    facebook: faFacebook
  }

  const createIcons = (data) => {
    const output = []
    for(let app in data){
      const icon = 
        <SocialNetwork 
          icon={ icons[ app ] }
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
          { createIcons(content.footer.apps) }
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default Networks