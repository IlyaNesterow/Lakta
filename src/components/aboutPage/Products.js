import React from 'react'

import Section from '../../styles/sectionOfAboutPage'
import { ContentContext } from '../../utils/contexts'
import Slider from '../global/slider' 


const Products = ({ lang, theme }) => {
  const generateProds = (data) => 
    data.products.map((pr, i) => 
      <span 
        id="products" 
        key={ pr.en }  
      >
        { pr[ lang ].toUpperCase() + (i < data.products.length - 1 ? ', ' : '.') }
      </span>
    )

  return(
    <ContentContext.Consumer>
      {content => 
        <Slider
          images={ content.about.bgImages[2] }
          height="70vh"
          bars
        >
          <Section darkTheme={ theme }>
            <p>
              { content.about.productsWord[ lang ].toUpperCase() + ': ' }
              { generateProds(content.about) }
            </p>
          </Section>
        </Slider>
      }
    </ContentContext.Consumer>
  )
}

export default Products