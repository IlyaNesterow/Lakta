import React from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/aboutPage'
import { ContentContext } from '../../utils/contexts'


const Main = () => {
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  const generateProds = (data) => 
    data.products.map((pr, i) => 
      <span 
        id="products" 
        key={ pr.en }  
      >
        { pr[ lang ] + (i < data.products.length - 1 ? ', ' : '.') }
      </span>
    )

  return(
    <ContentContext.Consumer>
      {content => 
        <Page 
          id="page-section"
          darkTheme={ theme }
          image1={ content.about.bgImages[0] }
          image2={ content.about.bgImages[1] }
          image3={ content.about.bgImages[2] }
        >
          <h1>{ content.about.title[ lang ] }</h1>
          <div id="introduction">
            <p>{ content.about.inShort[ lang ] }</p>
          </div>
          <div id="about-products">
            <p>{ content.about.onProducts[ lang ] }</p>
          </div>
          <div id="products">
            <p>
              { content.about.productsWord[ lang ] + ': ' }
              { generateProds(content.about) }
            </p>
          </div>
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main