import React from 'react'
import { useSelector } from 'react-redux'
import { faWhatsapp, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

import content from '../../../content/footer'
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
        />
      output.push(icon)
    }
    return output
  }

  return(
    <div id="networks">
      <p>{ content.connections[ lang ] }</p>
      <div id="networks-icons"> 
        { createIcons(content.apps) }
      </div>
    </div>
  )
}

export default Networks