import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
//etc
import { ContentContext } from '../utils/contexts'


const Router = () => (
  <ContentContext.Consumer>
    {content => 
      <BrowserRouter>
        <Navbar/>
        <MenuTab/>
        <Switch>
          <Route exact path="/" component={ MainPage }/>
          <Route 
            exact
            path={ content.about.subnavbar.links.map(s => `/about/${ s.url }` ) } 
            component={ AboutPage } 
          />
          <Route path="/about">
            <Redirect to={ `/about/${ content.about.subnavbar.links[0].url }` }/>
          </Route>
          <Route 
            exact 
            path={ content.gallery.sections.map(s => `/gallery/${ s.url }`) } 
            component={ Gallery }
          />
          <Route path="/gallery">
            <Redirect to={ `/gallery/${ content.gallery.sections[0].url }` }/>
          </Route>
          <Route path="/info" component={ InfoPage }/>
          <Route path="*" component={ PageNotFound }/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    }
  </ContentContext.Consumer>
)

export default Router