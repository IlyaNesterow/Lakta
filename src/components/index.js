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
  const [ showInitialScene, setShowInitialScene ] = useState(true)
  const [ secrets, setSecrets ] = useState(null)

  const theme = useSelector(state => state.theme)
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://temporary-lakta-storage.s3-us-west-2.amazonaws.com/data.json')
      .then(res => res.json())
      .then(res => {
        setContent(res)
        setTimeout(() => setShowInitialScene(false), 1500)
      })  
      .catch(err => console.log(err.message))
  }, [])

  useEffect(() => {
    fetch('https://temporary-lakta-storage.s3-us-west-2.amazonaws.com/secrets.json')
      .then(res => {
        if(res.ok) return res.json()
        throw new Error('Nothing received')
      })
      .then(res => setSecrets(res))
      .catch(() => setSecrets(null))
  }, [])

  useEffect(() => {
    const checkLang = async () => {
      let lang = window.localStorage.getItem('lang')
      if(lang && !langs.some(l => l === lang.toLowerCase())) lang = 'lv'
      if(!lang){
        if(secrets) lang = await defineRegion(secrets.GEOLOCATION_API_KEY)
        else lang = 'lv'
      }
      dispatch(change(lang))
      if(secrets) setSecrets(null)
    }
    if(secrets) checkLang()
  }, [ dispatch, langs, secrets ]) 

  useEffect(_ => {
    window.addEventListener('storage', storageObserver)
    window.addEventListener('resize', closeMenu)
    return () => {
      window.removeEventListener('storage', storageObserver)
      window.removeEventListener('resize', closeMenu)
    }
  })

  const closeMenu = () => {
    if(window.innerWidth > 800) dispatch(setOpened(false))
  }

  const setDefaults = () => {
    dispatch(setDefault(true))
    dispatch(change('lv'))
  }

  const storageObserver = e => {
    !e.key && setDefaults()
  }

  return (
    <>
      <GlobalStyle 
        darkTheme={ theme }
        image1={ content ? content.images.menu.first : '' }
        image2={ content ? content.images.menu.second : '' }
        image3={ content ? content.images.menu.third : '' }
        image4={ content ? content.images.menu.fourth : '' }
      />
      <InitialScene visible={ showInitialScene }/>
      { content !== null &&
        <ContentContext.Provider value={ content }>
          <Router/>
        </ContentContext.Provider>
      }
    </>
  )
}

export default App