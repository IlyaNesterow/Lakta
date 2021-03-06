import React, { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


const Scroller = () => {
  const [ visible, setVisible ] = useState(true)
  const [ directionUp, setDirectionUp ] = useState(false)
  const [ syntheticScrolling, setSyntheticScrilling ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling)
    return () => window.removeEventListener('scroll', handleScrolling)
  })

  const handleScrolling = () => {
    if(!syntheticScrolling){
      const fullHeight = document.body.scrollHeight 
      const scrolledFor = window.pageYOffset
      const docHeight = window.innerHeight

      setVisible(!(scrolledFor > docHeight && scrolledFor < fullHeight - (docHeight * 2)))
      setDirectionUp(scrolledFor > ((fullHeight - docHeight) / 2))
    }
  }

  const scrollSomewhere = useCallback(() => {
    setSyntheticScrilling(true)
    if(directionUp){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      setDirectionUp(false)
    } else {
      window.scroll({
        top: document.body.scrollHeight - window.innerHeight,
        left: 0,
        behavior: 'smooth',
      })
      setDirectionUp(true)
    }
    setTimeout(() => setSyntheticScrilling(false), 500)
  }, [ directionUp ])
  
  return(
    <div 
      id="scroller"
      className={ visible ? 'visible' : 'hidden' }
      onClick={ scrollSomewhere }
    >
      <FontAwesomeIcon
        icon={ directionUp ? faAngleDoubleUp : faAngleDoubleDown }
      />
    </div>
  )
}

export default Scroller