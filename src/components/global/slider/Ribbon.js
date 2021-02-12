import React from 'react'

import Slide from '../../../styles/slide'
import Container from '../../../styles/ribbon'


const Ribbon = ({ images, transformX, rows = 1 }) => {
  const createElements = () => 
    images.map((img, index) => 
      <Slide 
        bgImage={ img }
        key={ img + index }
      />
    )

  return(
    <Container 
      transformX={ `translateX(-${ transformX }px)` }
      rows={ rows }
      transition="2"
    >
      { createElements() }
    </Container>
  )
}

export default Ribbon