import React from 'react'
import { useSelector } from 'react-redux' 

import Page from '../../styles/aboutPage'
import content from '../../content/about'


const Main = () => {
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  const products = content.products.map((pr, i) => 
    <span 
      id="products" 
      key={ pr.en }
    >
      { pr[ lang ] + (i < content.products.length - 1 ? ', ' : '.') }
    </span>
  )

  return(
    <Page 
      id="page-section"
      darkTheme={ theme }
    >
      <h1>{ content.title[ lang ] }</h1>
      <div id="introduction">
        <p>{ content.inShort[ lang ] }</p>
      </div>
      <div id="about-products">
        <p>{ content.onProducts[ lang ] }</p>
      </div>
      <div id="products">
        <p>
          { content.productsWord[ lang ] + ': ' }
          { products }
        </p>
      </div>
    </Page>
  )
}

export default Main