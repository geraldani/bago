import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './Views/register/Register'
import Header from './Views/common/header/Header'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <div style={{ marginTop: '67px' }}>
      <Switch>
        <Route exact path='/' component={Register} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
