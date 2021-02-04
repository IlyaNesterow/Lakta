import React, { useEffect } from 'react'

import Logo from './Logo'

const Scene = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  })

  return( 
    <div id="initial-scene">
      <Logo  
        height="20vh"
        width="20vh"
        fill="#3377ff"
      />
    </div>
  )
}

export default Scene