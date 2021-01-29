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
      image1="http://lakta.lv/images/lakta-metala-kaluma-margas-4-small.jpg"
      image2="http://lakta.lv/images/lakta-dekorativs-metala-kaluma-objekts-small.jpg"
      image3="http://lakta.lv/images/lakta-metala-kaluma-varti-4-small.jpg"
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