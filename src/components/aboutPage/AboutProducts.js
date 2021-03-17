import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import Slider from '../global/slider'
import { ContentContext } from '../../utils/contexts'


const About = ({ lang, theme }) => (
  <ContentContext.Consumer>
    {content => 
      <Slider
        images={ content.about.bgImages[1] }
        height="70vh"
        bars
      >
        <Section darkTheme={ theme }>
          <p>{ content.about.onProducts[ lang ] }</p>
        </Section>
      </Slider>
    }
  </ContentContext.Consumer>
)

export default React.memo(About)