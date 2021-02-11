import React from 'react'
import { useSelector } from 'react-redux'
import { ContentContext } from '../../../utils/contexts'


const Copyright = () => {
  const lang = useSelector(state => state.lang)

  return(
    <div id="copyright">
      <ContentContext.Consumer>
        {content => 
          <>
            <p>
              { content.footer.copyright }
            </p>
            <p>
              { content.footer.designedBy[ lang ] }: <span id="author">{ content.footer.author }</span>
            </p>
          </>
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default Copyright
