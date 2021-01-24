import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import MenuTab from '../components/global/menu/MenuTab'


const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <MenuTab/>
    <Switch>
      <Route exact path="/"/>
      <Route path="/about"/>
      <Route path="/gallery"/>
      <Route path="/info"/>
    </Switch>
    <Footer/>
  </BrowserRouter>
)

export default Router