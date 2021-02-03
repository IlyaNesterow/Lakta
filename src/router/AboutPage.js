import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from '../components/aboutPage/Products'
import AboutProducts from '../components/aboutPage/AboutProducts'
import Introduction from '../components/aboutPage/Introduction'
import PageNotFound from '../components/global/PageNotFound'


const Router = (props) => {
  const { lang, theme, children } = props

  return(
    <BrowserRouter basename="/about">
      { children }
      <Switch>
        <Route 
          exact
          path="/onproducts"
          render={() => 
            <AboutProducts 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route 
          exact
          path="/products"
          render={() => 
            <Products 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route   
          path="/intro"
          render={() => 
            <Introduction 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route path="*" component={ PageNotFound }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router