import React, { useState, useEffect, useRef } from 'react'
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons'

import Control from './Control'
import CurrentImage from './CurrentImage'
import ZoomBar from './ZoomBar'


const Modal = ({ images, index, onClose }) => {
  const [ current, setCurrent ] = useState(index)
  const [ hasPrev, setHasPrev ] = useState(false)
  const [ hasNext, setHasNext ] = useState(false)
  const [ touchStart, setTouchStart ] = useState(null)
  const [ zoom, setZoom ] = useState(1)
  const [ unableToZoomIn, setUnableToZoomIn ] = useState(false)
  const [ unableToZoomOut, setUnableToZoomOut ] = useState(true)
  const [ initialWidth ] = useState((window.innerHeight / window.innerWidth) > 1 ? 300 : 240)
  const [ zoomStep ] = useState(0.4)
  const [ treshold, setTreshold ] = useState(window.innerWidth > 600 ? 0.8 : 0.9)
  
  const pic = useRef(null)

  useEffect(() => {
    document.addEventListener('resize', resetTreshold)
    return () => document.removeEventListener('resize', resetTreshold)
  })
  
  useEffect(() => {
    pic.current.width = initialWidth 
    
    setHasPrev(current > 0) 
    setHasNext(current < images.length - 1)
  }, [ current, images.length, initialWidth ]) 

  useEffect(() => { 
    if(zoom >= (1 - zoomStep) && !unableToZoomIn){
      pic.current.width = initialWidth * zoom
      if(
        pic.current.clientHeight > window.innerHeight * treshold || 
        pic.current.clientWidth > window.innerWidth * treshold
      ) setUnableToZoomIn(true)
    } 
  }, [ zoom, zoomStep, treshold, initialWidth, unableToZoomIn, unableToZoomOut ])

  const resetTreshold = () => 
    window.innerWidth > 600
      ? setTreshold(0.8)
      : setTreshold(0.9)

  const handleImgChange = (dir) => {
    if(dir === 'prev'){ 
      setCurrent(current - 1)
    } else { 
      setCurrent(current + 1)
    }
    setZoom(1)
    setUnableToZoomOut(true)
    setUnableToZoomIn(false)
  }

  const handleTouchStart = (e) => {
    const firstTouchEvent = e.touches[0]
    setTouchStart({
      x: firstTouchEvent.clientX, 
      y: firstTouchEvent.clientY
    })
  }

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0]
    const location = {
      x: touch.clientX, 
      y: touch.clientY
    }
    if(
      location.x - touchStart.x > 0 && 
      location.x - touchStart.x > window.innerWidth / 6 &&
      Math.abs(location.y - touchStart.y) < 50
    ) handleImgChange('next')
    else if(
      location.x - touchStart.x < 0 && 
      Math.abs(location.x - touchStart.x) > window.innerWidth / 6 &&
      Math.abs(location.y - touchStart.y) < 50
    ) handleImgChange('prev')
    setTouchStart(null)
  }

  const handleZoomIn = () => { 
    if(!unableToZoomIn)
    if(unableToZoomOut){
      setUnableToZoomOut(false)
      setZoom(zoom + zoomStep)
    } else setZoom(zoom + zoomStep)
  }

  const handleZoomOut = () => {
    if(!unableToZoomOut){
      if(unableToZoomIn){
        setUnableToZoomIn(false)
        setZoom(zoom - zoomStep)
      } else setZoom(zoom - zoomStep)
      if(zoom === (1 + zoomStep)) setUnableToZoomOut(true)
    }
  }

  return(
    <>
      {hasPrev && 
        <Control 
          onClick={() => handleImgChange('prev')}
          icon={ faAngleLeft }
          id="left-arrow"
        />
      }
      <Control
        onClick={ onClose }
        id="close-modal"
        icon={ faTimes }
      />
      <CurrentImage
        imgSrc={ images[ current ] }
        ref={ pic }
        onTouchEnd={ handleTouchEnd }
        onTouchStart={ handleTouchStart }
      />
      <ZoomBar
        onZoomIn={ handleZoomIn }
        onZoomOut={ handleZoomOut }
        unableToZoomIn={ unableToZoomIn }
        unableToZoomOut={ unableToZoomOut }
      />
      {hasNext && 
        <Control
          icon={ faAngleRight }
          onClick={() => handleImgChange('next')}
          id="right-arrow" 
        />
      }
    </>
  )
}

export default Modal