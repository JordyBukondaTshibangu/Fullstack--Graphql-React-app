import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { client } from './utils/apolloClient.config.js'
import UserProviderContext from './context/UserContext'
import PeopleContextProvider from './context/PeopleContext'
import ProtectedRoute from './routes/ProtectedRoute'
import Unauthorized from './routes/unauthorized'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'
import PersonPage from './pages/person'
import EditPersonPage from './pages/editPerson'
import AddPersonPage from './pages/addPerson'
import AboutPage from './pages/about'
import ProfilePage from './pages/profile'

const App = () => {

  return (
    <ApolloProvider client={client}>
      <UserProviderContext>
        <PeopleContextProvider>
          <Router>
              <Switch>
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <ProtectedRoute exact path="/" component={HomePage} />
                <ProtectedRoute exact path="/about" component={AboutPage} />
                <ProtectedRoute exact path="/people/:name" component={PersonPage} />
                <ProtectedRoute exact path="/edit-person/:name" component={EditPersonPage} />
                <ProtectedRoute exact path="/add-person" component={AddPersonPage} />
                <ProtectedRoute exact path="/my-profile" component={ProfilePage} />
                <Route exact path='/unauthorized' component={Unauthorized} />
              </Switch>
          </Router>
        </PeopleContextProvider>
      </UserProviderContext>
    </ApolloProvider>
  );
}

export default App
