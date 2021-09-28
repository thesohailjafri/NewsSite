import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { Route, Switch, Redirect } from 'react-router'

//components
import Header from './components/Header'
//general pages
import Home from './PAGES/Home'
import Weather from './PAGES/Weather'
import About from './PAGES/About'

//auth pages
import SignUp from './PAGES/AUTH/SignUp'
import SignIn from './PAGES/AUTH/SignIn'

//news pages
import Trending from './PAGES/NEWS/Trending'
import Recommendation from './PAGES/NEWS/Recommendation'
import Popular from './PAGES/NEWS/Popular'
import Mumbai from './PAGES/NEWS/Mumbai'
import Delhi from './PAGES/NEWS/Delhi'
import Covid from './PAGES/NEWS/Covid'

//sport pages
import Basketball from './PAGES/SPORTS/Basketball'
import Cricket from './PAGES/SPORTS/Cricket'
import Football from './PAGES/SPORTS/Football'
import Hockey from './PAGES/SPORTS/Hockey'


function App() {


  return (
    <div className="App">

      {/* COMPONENTS */}
      <Header />

      <Switch>

        {/* GENERALS */}
        <Route exact path='/' component={Home} />
        <Route path='/weather' component={Weather} />
        <Route path='/about' component={About} />

        {/* AUTH */}
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />

        {/* NEWS */}
        <Route path='/news/trending' component={Trending} />
        <Route path='/news/popular' component={Popular} />
        <Route path='/news/covid' component={Covid} />
        <Route path='/news/mumbai' component={Mumbai} />
        <Route path='/news/delhi' component={Delhi} />


        {/* SPORTS */}
        <Route path='/sports/football' component={Football} />
        <Route path='/sports/cricket' component={Cricket} />
        <Route path='/sports/basketball' component={Basketball} />
        <Route path='/sports/hockey' component={Hockey} />

      </Switch>


    </div>
  )
}

export default App
