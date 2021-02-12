import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Links from './Links'
import setOpened from '../../../redux/actions/menu'
import Container from '../../../styles/menuTab'
import Languages from '../Languages'
import Theme from '../Theme'


const MenuTab = () => {
  const opened = useSelector(state => state.menu) 
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  useEffect(() => {
    opened
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  })

  return(
    <Container 
      className={ opened ? 'menu-opened' : 'menu-hidden' }
      darkTheme={ theme }
    >
      <div id="right-tab">
        <Links 
          lang={ lang }
          theme={ theme }
          onClick={() => dispatch(setOpened(false))}
        />
        <div id="langs-theme">
          <Languages/>
          <Theme/>
        </div>
      </div>
    </Container>
  )
}

export default MenuTab