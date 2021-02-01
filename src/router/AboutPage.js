import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from '../components/aboutPage/Products'
import AboutProducts from '../components/aboutPage/AboutProducts'
import Introduction from '../components/aboutPage/Introduction'
import PageNotFound from '../components/global/PageNotFound'


const Router = (props) => {
  const { lang, theme, children } = props

  return(
    <BrowserRouter>
      { children }
      <Switch>
        <Route 
          exact
          path="/about/onproducts"
          render={() => 
            <AboutProducts 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route 
          exact
          path="/about/products"
          render={() => 
            <Products 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route   
          path="/about/intro"
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