import React from 'react';
import './style/App.css';
import Router from './components/Router'
// import Navbar from './components/NavBar'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './pages/HomePage/Home'
// import Signup from './pages/Signup';

function App() {
  return <Router />
  // (
//     <Router>
//     <Navbar />
//     <Switch>
//       <Route path='/' exact component={Home}/>
//       <Route path='/register' exact component={Signup}/>
//     </Switch>
//     </Router>
  // );
}

export default App;
 