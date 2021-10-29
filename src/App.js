import React from 'react'
import MainPage from './MainPage'
import PageLoader from './components/PageLoader'
import NotImplementedPage from './components/NotImplementedPage'
import { Switch, Route } from 'react-router'
import { v4 } from 'uuid'

function App() {
  return (
    <Switch>
        <Route exact path='/'><PageLoader key={v4()} PageComponent={MainPage}/></Route>
        <Route exact path='/museScrape'><PageLoader key={v4()} PageComponent={NotImplementedPage}/></Route>
        <Route exact path='/gameSystems'><PageLoader key={v4()} PageComponent={NotImplementedPage}/></Route>
        <Route exact path='/portfolioProduction'><PageLoader key={v4()} PageComponent={NotImplementedPage}/></Route>
    </Switch>
)
}

export default App;
