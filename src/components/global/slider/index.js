import React from 'react'

import Ribbon from './Ribbon'
import Container from '../../../styles/slider'


const Slider = (props) => {
  const { images, height, children } = props

  return(
    <Container
      height={ height }
    >
      <Ribbon images={ images }/>
      { children }
    </Container>
  )
}

export default Slider