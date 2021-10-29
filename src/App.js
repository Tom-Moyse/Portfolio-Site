import React from 'react'
import MainPage from './MainPage'
import PageLoader from './components/PageLoader'
import NotImplementedPage from './components/NotImplementedPage'
import { Switch, Route } from 'react-router'
import { uuid } from 'uuidv4'

function App() {
  return (
    <Switch>
        <Route exact path='/'><PageLoader key={uuid()} PageComponent={MainPage}/></Route>
        <Route exact path='/museScrape'><PageLoader key={uuid()} PageComponent={NotImplementedPage}/></Route>
        <Route exact path='/gameSystems'><PageLoader key={uuid()} PageComponent={NotImplementedPage}/></Route>
        <Route exact path='/portfolioProduction'><PageLoader key={uuid()} PageComponent={NotImplementedPage}/></Route>
    </Switch>
)
}

export default App;
