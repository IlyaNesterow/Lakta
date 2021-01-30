import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//components
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import MenuTab from '../components/global/menu/MenuTab'
//pages
import InfoPage from '../components/infoPage'
import AboutPage from '../components/aboutPage'
import Gallery from '../components/gallery'
import MainPage from '../components/mainPage'
import PageNotFound from '../components/global/PageNotFound'


const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <MenuTab/>
    <Switch>
      <Route exact path="/" component={ MainPage }/>
      <Route path="/about" component={ AboutPage }/>
      <Route path="/gallery" component={ Gallery }/>
      <Route path="/info" component={ InfoPage }/>
      <Route path="*" component={ PageNotFound }/>
    </Switch>
    <Footer/>
  </BrowserRouter>
)

export default Router