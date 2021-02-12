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
              <a
                href={ content.author.url }
                target="_blank"
                rel="noreferrer"
              >
                { content.footer.designedBy[ lang ] }: <span id="author">{ content.author.name }</span>
              </a>
            </p>
          </>
        }
      </ContentContext.Consumer>
    </div>
  )
}

export default Copyright
