import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Router from '../router'
import defineRegion from '../utils/defineRegion'
import GlobalStyle from '../styles/global'
import { setDefault } from '../redux/actions/theme'
import setOpened from '../redux/actions/menu'
import change from '../redux/actions/lang'
import { ContentContext } from '../utils/contexts'
import InitialScene from './global/InitialScene'


const App = () => {
  const [ langs ] = useState(['en', 'lv', 'ru'])
  const [ content, setContent ] = useState(null)

  const theme = useSelector(state => state.theme)
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://temporary-lakta-storage.s3-us-west-2.amazonaws.com/data-1.json')
      .then(res => res.json())
      .then(res => {
        setTimeout(() => setContent(res), 1000)
      })
  }, [])

  useEffect(() => {
    const checkLang = async () => {
      let lang = window.localStorage.getItem('lang')
      if(lang && !langs.some(l => l === lang.toLowerCase())) lang = 'lv'
      if(!lang) lang = await defineRegion()
      console.log(lang)
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
      { content === null
        ? <InitialScene/>
        : (
            <ContentContext.Provider value={ content }>
              <Router/>
            </ContentContext.Provider>
          )
      }
    </>
  )
}

export default App