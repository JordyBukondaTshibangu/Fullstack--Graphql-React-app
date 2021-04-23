import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { client } from './utils/apolloClient.config.js'
import PeopleContextProvider from './context/PeopleContext'
import HomePage from './pages/home'
import PersonPage from './pages/person'
import AboutPage from './pages/about'
import Navbar from './components/NavBar'
import SideBar from './components/SideBar'


const App = () => {

  const [ isOpen, setOpen ] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <ApolloProvider client={client}>
      <PeopleContextProvider>
        <Router>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/people/:name" exact component={PersonPage} />
            </Switch>
        </Router>
      </PeopleContextProvider>
    </ApolloProvider>
  );
}

export default App
