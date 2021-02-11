import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as lightBulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as darkBulb } from '@fortawesome/free-regular-svg-icons'
import Container from '../../styles/theme'
import { toggle } from '../../redux/actions/theme'
 

const Theme = () => {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  return(
    <Container darkTheme={ theme }>
      <FontAwesomeIcon
        icon={ theme ? lightBulb : darkBulb } 
        onClick={() => dispatch(toggle())}
      />
    </Container>
  )
}

export default Theme