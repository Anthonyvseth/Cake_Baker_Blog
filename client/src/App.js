import React from 'react';
import './style/App.css';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
    </Router>
  );
}

export default App;
 