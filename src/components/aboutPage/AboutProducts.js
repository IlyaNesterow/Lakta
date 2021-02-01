import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import { ContentContext } from '../../utils/contexts'


const About = ({ lang, theme }) => (
  <ContentContext.Consumer>
    {content => 
      <Section 
        image={ content.about.bgImages[1] }
        darkTheme={ theme }
      >
        <p>{ content.about.onProducts[ lang ] }</p>
      </Section>
    }
  </ContentContext.Consumer>
)

export default About