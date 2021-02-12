import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Ribbon from './Ribbon'
import Container from '../../../styles/slider'
import Bars from './Bars'
import Arrows from './Arrows'


const Slider = (props) => {
  const [ current, setCurrent ] = useState(0)
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ transformX, setTransformX ] = useState(0)
  const [ next, setNext ] = useState(true)
  const [ time ] = useState(props.time || 6)
 
  const theme = useSelector(state => state.theme)

  const { images, height, bars, controls, children } = props

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

  return(
    <Container
      height={ height }
      darkTheme={ theme }
    >
      <Ribbon 
        images={ images }
        transformX={ transformX }
      />
      {bars &&
        <Bars
          amount={ images.length }
          current={ current }
          clickHandler={(index) => setCurrent(index)} 
        />
      }
      {controls && 
        <Arrows 
          hasNext={ current < images.length - 1 }
          hasPrev={ current > 0 }
          handleNextClick={() => setCurrent(current + 1)}
          handlePrevClick={() => setCurrent(current - 1)}
        />
      }
      { children }
    </Container>
  )
}

export default Slider