import React from 'react'


const Bars = ({ amount, clickHandler, current }) => {
  const createBars = () => {
    const bars = []
    for(let i = 0; i < amount; i++){
      const bar = (
        <span 
          id={ current === i ? 'current' : '' }
          className="bar" 
          onClick={() => clickHandler(i)}
          key={ i }
        >
        </span>
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

export default Bars