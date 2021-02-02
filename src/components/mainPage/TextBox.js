import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'


const TextBox = ({ labels }) => {
  const [ index, setIndex ] = useState(0)
 
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)

  const lang = useSelector(state => state.lang)
  
  const resetLabels = (st, nd, rd) => {
    st.current.id = 'next'
    nd.current.id = 'prev'
    rd.current.id = 'current'
    index > 0
      ? nd.current.textContent = labels[ index < labels.length - 1 ? index: 0 ][ lang ]
      : nd.current.textContent = labels[ labels.length - 1 ][ lang ]
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(second.current.id === 'current')
        resetLabels(second, third, first)
      else if(third.current.id === 'current') 
        resetLabels(third, first, second)
      else if(first.current.id === 'current') 
        resetLabels(first, second, third)
        
      index < labels.length - 1
        ? setIndex(index + 1)
        : setIndex(0)
    }, 5000)
    return () => clearInterval(interval)
  })

  return(
    <div id="text-box">
      <h2 id="prev" ref={ first }>
        { labels[ 0 ][ lang ] }
      </h2>
      <h2 ref={ second } id="current">
        { labels[ 1 ][ lang ] }
      </h2>
      <h2 ref={ third } id="next"></h2>
    </div>
  )
}

export default TextBox