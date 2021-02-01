import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import { ContentContext } from '../../utils/contexts'


const Introduction = ({ lang, theme }) => (
  <ContentContext.Consumer>
    {content => 
      <Section 
        image={ content.about.bgImages[0] }
        darkTheme={ theme }
      >
        <p>{ content.about.inShort[ lang ] }</p>
      </Section>
    }
  </ContentContext.Consumer>
)

export default Introduction