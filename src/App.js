import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './Views/register'
import Header from './Views/common/header/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Register} />
    </Switch>
  </BrowserRouter>
)

export default App
