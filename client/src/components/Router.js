import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import Discover from '../components/Discover'
import Home from '../pages/HomePage/Home'
// import LandingPage from '../pages/LandingPage'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
import UpdatePost from '../pages/UpdatePost'
import ViewPost from '../pages/ViewPost'
import { __CheckSession } from '../components/services/UserServices'
import Layout from './Layout'
import ProtectedRoute from './ProtectedRoute'
// import Navbar from './NavBar'
import About from '../pages/About'
import { aboutObj } from '../pages/HomePage/Data'

class Router extends Component {
    constructor() {
      super()
      this.state = {
        authenticated: false,
        currentUser: null,
        pageLoading: true
      }
    }
  
    componentDidMount() {
      //invoke verifyTokenValid request
      this.verifyTokenValid()
      this.setState({ pageLoading: false })
    }
  
    verifyTokenValid = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const session = await __CheckSession()
          console.log('session', session)
          this.setState(
            {
              currentUser: session.user,
              authenticated: true
            },
            () => this.props.history.push('/profile')
          )
        } catch (error) {
          this.setState({ currentUser: null, authenticated: false })
          localStorage.clear()
        }
        // Send Api request to verify token
        // if token valid should set a user to state
      }
    }
  
    toggleAuthenticated = (value, user, done) => {
      this.setState({ authenticated: value, currentUser: user }, () => done())
    }
  
    render() {
      return (
        <main>
          {this.state.pageLoading ? (
            <h3>Loading...</h3>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                component={() => ( <Layout><Home /></Layout>)}
              />
              <Route
                path="/register"
                component={(props) => (
                  <Layout>
                    <Signup {...props} />
                  </Layout>
                )}
              />
              <Route
                path="/login"
                component={(props) => (
                  <Layout>
                    <SignIn
                      toggleAuthenticated={this.toggleAuthenticated}
                      {...props}
                    />
                  </Layout>
                )}
              />
              <Route
                path="/about"
                component={(props) => (
                  <Layout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <About {...aboutObj} />
                  </Layout>
                )}
                /> 
                <Route
                path="/discover"
                component={(props) => (
                  <Layout
                  currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}>
                  
                    <Discover {...props}/>
                  </Layout>
                )}
              /> 
              <Route
                path="/posts/:post_id"
                component={(props) => (
                  <Layout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <ViewPost {...props} />
                  </Layout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/profile"
                component={(props) => (
                  <Layout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <Profile {...props} currentUser={this.state.currentUser} />
                  </Layout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/upload"
                component={(props) => (
                  <Layout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <CreatePost {...props} currentUser={this.state.currentUser} />
                  </Layout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/edit/:post_id"
                component={(props) => (
                  <Layout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <UpdatePost {...props} currentUser={this.state.currentUser} />
                  </Layout>
                )}
              />
            </Switch>
          )}
        </main>
      )
    }
  }
  
  export default withRouter(Router)
  