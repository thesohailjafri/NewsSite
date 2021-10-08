import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useRouteMatch, useLocation } from 'react-router'
import { useAppContext } from './context'
//components
import Header from './components/Header'
import SearchBar from './components/SearchBar'

//general pages
import Home from './PAGES/Home'
import Weather from './PAGES/Weather'
import About from './PAGES/About'
import TempNews from './PAGES/TempNews'
//auth pages
import SignUp from './PAGES/AUTH/SignUp'
import SignIn from './PAGES/AUTH/SignIn'






function App() {

  let route = useLocation()
  let routeMatchNews = useRouteMatch('/news')
  let routeMatchSports = useRouteMatch('/sports')
  let routeMatchHome = useRouteMatch('/')

  const { loading, getHomePageData } = useAppContext()


  return (
    <div className="App">

      {/* COMPONENTS */}
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-4">

        {
          (routeMatchNews || routeMatchSports || routeMatchHome.isExact) &&
          <SearchBar />
        }

        <Switch>

          {/* GENERALS */}
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={Weather} />
          <Route path='/about' component={About} />

          {/* AUTH */}
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />

          {/* NEWS */}
          <Route path='/news/trending' component={() => (<TempNews term='trending india' name='Trending' />)} />
          <Route path='/news/covid' component={() => (<TempNews term='covid' name='Covid' />)} />
          <Route path='/news/covid-india' component={() => (<TempNews term='covid india' name='Covid India' />)} />
          <Route path='/news/mumbai' component={() => (<TempNews term='mumbai' name='Mumbai' />)} />
          <Route path='/news/delhi' component={() => (<TempNews term='delhi' name='Delhi' />)} />


          {/* SPORTS */}


          <Route path='/sports' component={() => (<TempNews term='sports india' name='Sports' />)} />
          <Route path='/sports/football' component={() => (<TempNews term='football india' name='Football' />)} />
          <Route path='/sports/cricket' component={() => (<TempNews term='cricket india' name='Cricket' />)} />
          <Route path='/sports/basketball' component={() => (<TempNews term='basketball' name='Basketball' />)} />
          <Route path='/sports/hockey' component={() => (<TempNews term='hockey india' name='Hockey' />)} />
        </Switch>

      </div>


    </div>
  )
}

export default App
