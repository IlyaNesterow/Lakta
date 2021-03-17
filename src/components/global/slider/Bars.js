import React from 'react'


const Bars = ({ amount, clickHandler, current }) => {
  const createBars = () => {
    const bars = []
    for(let i = 0; i < amount; i++){
      const bar = (
        <div 
          className="bar-container"
          onClick={() => clickHandler(i)}
        >
          <span 
            id={ current === i ? 'current' : '' }
            className="bar" 
            key={ i }
          >
          </span>
        </div>
      )
      bars.push(bar)
    }

    return bars
  } 

  return(
    <div id="bars">
      { createBars() }
    </div>
  )
}

export default React.memo(Bars)