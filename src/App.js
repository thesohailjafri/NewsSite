import React, { useEffect } from 'react'
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useLocation,
} from 'react-router'
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
import SignUp from './PAGES/Auth/SignUp'
import SignIn from './PAGES/Auth/SignIn'
import SearchNews from './PAGES/SearchNews'
import Upload from './PAGES/Upload'
import Dashboard from './PAGES/Dashboard'
import { myselfApi } from './API'
import { useSetRecoilState } from 'recoil'
import { userInfoState } from './atoms/userInfo'

function App() {
  const setUserInfo = useSetRecoilState(userInfoState)
  const fetchMyself = async () => {
    const res = await myselfApi()
    if (res && res.status === 200) {
      setUserInfo(res.data.user)
    }
  }
  fetchMyself()
  let route = useLocation()
  let routeMatchNews = useRouteMatch('/news')
  let routeMatchSports = useRouteMatch('/sports')
  let routeMatchSearch = useRouteMatch('/search')

  let routeMatchHome = useRouteMatch('/')

  return (
    <div className="App ">
      {/* COMPONENTS */}
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
        {(routeMatchNews ||
          routeMatchSports ||
          routeMatchSearch ||
          routeMatchHome.isExact) && <SearchBar />}

        <Switch>
          {/* GENERALS */}
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/about" component={About} />

          {/* AUTH */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

          {/* User */}
          <Route path="/upload" component={Upload} />
          <Route path="/dashboard" component={Dashboard} />

          {/* NEWS */}
          <Route
            path="/news/trending"
            component={() => <TempNews term="trending india" name="Trending" />}
          />
          <Route
            path="/news/covid"
            component={() => <TempNews term="covid" name="Covid" />}
          />
          <Route
            path="/news/covid-india"
            component={() => <TempNews term="covid india" name="Covid India" />}
          />
          <Route
            path="/news/mumbai"
            component={() => <TempNews term="mumbai" name="Mumbai" />}
          />
          <Route
            path="/news/delhi"
            component={() => <TempNews term="delhi" name="Delhi" />}
          />

          {/* SPORTS */}

          <Route
            exact
            path="/sports"
            component={() => <TempNews term="sports india" name="Sports" />}
          />
          <Route
            exact
            path="/sports/football"
            component={() => <TempNews term="football india" name="Football" />}
          />
          <Route
            exact
            path="/sports/cricket"
            component={() => <TempNews term="cricket india" name="Cricket" />}
          />
          <Route
            exact
            path="/sports/basketball"
            component={() => <TempNews term="basketball" name="Basketball" />}
          />
          <Route
            exact
            path="/sports/hockey"
            component={() => <TempNews term="hockey india" name="Hockey" />}
          />

          {/* Search */}
          <Route exact path="/search/:id" component={() => <SearchNews />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
