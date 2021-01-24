import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Router from '../router'
import defineRegion from '../utils/defineRegion'
import GlobalStyle from '../styles/global'
import { setDefault } from '../redux/actions/theme'
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
    return _ => {
      window.removeEventListener('storage', storageObserver)
    }
  })

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