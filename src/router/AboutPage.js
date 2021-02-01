import React from 'react'
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom'

import Products from '../components/aboutPage/Products'
import AboutProducts from '../components/aboutPage/AboutProducts'
import Introduction from '../components/aboutPage/Introduction'
import PageNotFound from '../components/global/PageNotFound'


const Router = (props) => {
  const { lang, theme, children } = props
  const { path } = useRouteMatch()

  return(
    <BrowserRouter>
      { children }
      <Switch>
        <Route 
          exact
          path={ `${ path }/onproducts` } 
          render={() => 
            <AboutProducts 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route 
          exact
          path={ `${ path }/products` } 
          render={() => 
            <Products 
              lang={ lang }
              theme={ theme }
            /> 
          }
        />
        <Route    
          exact
          path={ `${ path }` } 
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