import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Arrows = ({ hasNext, hasPrev, handleNextClick, handlePrevClick }) => (
  <>
    {hasPrev &&
      <div 
        className="controls"
        id="prev"
        onClick={ handlePrevClick }
      >
        <FontAwesomeIcon icon={ faAngleLeft }/>
      </div>
    }
    {hasNext &&
      <div 
        className="controls"
        id="next"
        onClick={ handleNextClick }
      >
        <FontAwesomeIcon icon={ faAngleRight }/>
      </div>
    }
  </>
)

export default React.memo(Arrows)