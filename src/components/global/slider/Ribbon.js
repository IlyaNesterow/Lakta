import React, { useState, useEffect } from 'react'

import Slide from '../../../styles/slide'
import Container from '../../../styles/ribbon'


const Ribbon = ({ images, time = 6 }) => {
  const [ current, setCurrent ] = useState(0)
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ transformX, setTransformX ] = useState(0)
  const [ next, setNext ] = useState(true)

  useEffect(() => {
    const resetWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', resetWidth)
    return () => window.removeEventListener('resize', resetWidth)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if(current === 0){
        setCurrent(current + 1)
        setNext(true)
      } else if(current === images.length - 1){
        setCurrent(current - 1)
        setNext(false)
      } else next ? setCurrent(current + 1) : setCurrent(current - 1)
    }, time * 1000)
    return () => clearInterval(interval)
  }) 

  useEffect(() => 
    setTransformX(current * width), 
    [ current, width ]
  )

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
      transition="2"
    >
      { createElements() }
    </Container>
  )
}

export default Ribbon