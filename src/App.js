import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { Route, Switch, Redirect } from 'react-router'
import Menu from './components/Menu'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Recommendation from './pages/Recommendation'
import Weather from './pages/Weather'
function App() {


  return (
    <div className="App">


      <Switch>
        <Menu />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/trending'>
          <Trending />
        </Route>

        <Route path='/recommendation'>
          <Recommendation />
        </Route>

        <Route path='/weather'>
          <Weather />
        </Route>

      </Switch>


    </div>
  )
}

export default App
