import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Router from '../router'
import defineRegion from '../utils/defineRegion'
import GlobalStyle from '../styles/global'
import { setDefault } from '../redux/actions/theme'
import setOpened from '../redux/actions/menu'
import change from '../redux/actions/lang'


const App = () => {
  const [ langs ] = useState(['en', 'lv', 'ru'])

  const theme = useSelector(state => state.theme)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const checkLang = async () => {
      let lang = window.localStorage.getItem('lang')
      if(lang && !langs.some(l => l === lang.toLowerCase())) lang = 'lv'
      if(!lang) lang = await defineRegion()
      dispatch(change(lang))
    }
    checkLang()
  }, [ dispatch, langs ]) 

  useEffect(_ => {
    window.addEventListener('storage', storageObserver)
    window.addEventListener('resize', closeMenu)
    return _ => {
      window.removeEventListener('storage', storageObserver)
      window.removeEventListener('resize', closeMenu)
    }
  })

  const closeMenu = () => {
    if(window.innerWidth > 800) dispatch(setOpened(false))
  }

  const setDefaults = () => {
    dispatch(setDefault(false))
    dispatch(change('lv'))
  }

  const storageObserver = e => {
    !e.key && setDefaults()
  }

  return (
    <>
      <GlobalStyle darkTheme={ theme }/>
      <Router/>
    </>
  )
}

export default App