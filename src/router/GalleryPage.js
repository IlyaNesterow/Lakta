import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Section from '../components/gallery/Section'
import PageNotFound from '../components/global/PageNotFound'
import { ContentContext } from '../utils/contexts'


const Router = (props) => {
  const { lang, children } = props

  const generateRoutes = (data) => 
    data.map(s => (
      <Route 
        exact
        path={ `/gallery/${ s.url }` } 
        key={ s.title.en.trim() }
        render={() => 
          <Section
            lang={ lang }
            data={ s }
          />
        }
      />
    ))

  return(
    <ContentContext.Consumer>
      {content => 
        <BrowserRouter>
          { children }
          <Switch>
            { generateRoutes(content.gallery.sections) }
            <Route path="*" component={ PageNotFound }/>
          </Switch>
        </BrowserRouter>
      }
    </ContentContext.Consumer>
  )
}

export default Router