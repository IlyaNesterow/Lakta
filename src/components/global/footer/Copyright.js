import React from 'react'
import { ContentContext } from '../../../utils/contexts'


const Copyright = () => (
  <div id="copyright">
    <ContentContext.Consumer>
      {content => 
        content.footer.copyright
      }
    </ContentContext.Consumer>
  </div>
)

export default Copyright
