import React from 'react'

import { ContentContext } from '../../utils/contexts'
import Author from './Author'
import TextBox from './TextBox'
import Slider from '../global/slider'


const BgImage = () => {
  const makeUpperCase = (labels) => 
    labels.map(l => {
      const newNode = {}
      Object.entries(l).forEach(([key, val]) => {
        newNode[key] = val.toUpperCase()
      })
      return newNode
    }) 

  const shuffleLabels = (labels, steps) => {
    for(let i = 0; i < steps; i++)
      labels.unshift(labels.pop())
    
    return labels
  }

  return(
    <ContentContext.Consumer>
      {content => 
        <Slider
          height="calc(100vh - 4rem)"
          images={ content.main.images }
          time={ content.main.slider.time }
          bars
          controls
        >
          <TextBox 
            className="right"
            labels={ 
              makeUpperCase(content.main.slider.labels)
            }
            top="10%"
            left="75%"
          />
          <TextBox 
            className="central" 
            labels={ 
              shuffleLabels(makeUpperCase(content.main.slider.labels), 2) 
            }
          />
          <TextBox 
            className="left"
            labels={ 
              shuffleLabels(makeUpperCase(content.main.slider.labels), 1)
            }
            top="80%"
            left="25%"
          />
          <Author/> 
        </Slider>
      }
    </ContentContext.Consumer>
  )
}

export default BgImage