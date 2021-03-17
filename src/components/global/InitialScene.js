import React, { useEffect } from 'react'

import Logo from './Logo'

const Scene = ({ visible }) => {
  useEffect(() => {
    visible
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  })

  return(
    <div 
      id="initial-scene"
      className={ visible ? 'visible' : 'hidden' }
    >
      <Logo  
        height="20vh"
        width="20vh"
        fill="#3377ff"
      />
    </div>
  )
}

export default React.memo(Scene)