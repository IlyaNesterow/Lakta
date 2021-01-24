import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import setOpened from '../../../redux/actions/menu'


const Menu = () => {
  const opened = useSelector(state => state.menu)
  const dispatch = useDispatch()

  return(
    <div id="Menu">
      <h2 
        className={ opened ? 'active' : 'normal' }
        onClick={() => dispatch(setOpened(!opened))}
      >
        <FontAwesomeIcon icon={ faHome }/>
      </h2>
    </div>
  )
}

export default Menu