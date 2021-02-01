import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import { ContentContext } from '../../utils/contexts'


const Products = ({ lang, theme }) => {
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
        <Section
          image={ content.about.bgImages[2] }
          darkTheme={ theme }
        >
          <p>
            { content.about.productsWord[ lang ] + ': ' }
            { generateProds(content.about) }
          </p>
        </Section>
      }
    </ContentContext.Consumer>
  )
}

export default Products