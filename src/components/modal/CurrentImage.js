import React, { forwardRef } from 'react'


const CurrentImage = forwardRef(({ onTouchStart, onTouchEnd, imgSrc }, ref) => {
  return(
    <img 
      src={ imgSrc }
      ref={ ref }
      onTouchStart={ onTouchStart }
      onTouchEnd={ onTouchEnd }
      alt="Gallery item" 
      className="current-image"
    />
  )
})

export default CurrentImage