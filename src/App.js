import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './Views/register/Register'
import Header from './Views/common/header/Header'
import Login from './Views/login/Login'
import { GlobalStyles } from './styles/GlobalStyles'
import { routesPaths } from './Views/utils'

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <div style={{ marginTop: '67px' }}>
      <Switch>
        <Route exact path={routesPaths.home} component={Register} />
        <Route exact path={routesPaths.login} component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
