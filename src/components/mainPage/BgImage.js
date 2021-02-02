import React from 'react'

import { ContentContext } from '../../utils/contexts'
import Author from './Author'
import TextBox from './TextBox'


const BgImage = () => (
  <ContentContext.Consumer>
    {content => 
      <div className="container">
        <TextBox labels={ content.main.slider.labels }/>
        <Author author={ content.main.slider.author }/> 
      </div>
    }
  </ContentContext.Consumer>
)

export default BgImage