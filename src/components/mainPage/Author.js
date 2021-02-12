import React from 'react'
import { useSelector } from 'react-redux'

import { ContentContext } from '../../utils/contexts'


const Author = () => {
  const lang = useSelector(state => state.lang)

  return(
    <ContentContext.Consumer>
      {content => 
        <div id="author">
          <a 
            href={ content.author.url }
            target="_blank"
            rel="noreferrer"
          >
            <span>{ `${ content.author.word[ lang ] }: ` }</span>
            <span>{ content.author.name }</span>
          </a>
        </div>
      }
    </ContentContext.Consumer>
  )
}

export default Author