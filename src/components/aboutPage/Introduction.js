import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import { ContentContext } from '../../utils/contexts'
import Slider from '../global/slider'


const Introduction = ({ lang, theme }) => (
  <ContentContext.Consumer>
    {content => 
      <Slider
        images={ content.about.bgImages[0] }
        height="70vh"
        bars
      >
        <Section darkTheme={ theme }>
          <p>{ content.about.inShort[ lang ] }</p>
        </Section>
      </Slider>
    }
  </ContentContext.Consumer>
)

export default Introduction