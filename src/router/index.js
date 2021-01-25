import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//components
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import MenuTab from '../components/global/menu/MenuTab'
//pages
import InfoPage from '../components/infoPage'
import AboutPage from '../components/aboutPage'


const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <MenuTab/>
    <Switch>
      <Route exact path="/"/>
      <Route path="/about" component={ AboutPage }/>
      <Route path="/gallery"/>
      <Route path="/info" component={ InfoPage }/>
    </Switch>
    <Footer/>
  </BrowserRouter>
)

export default Router