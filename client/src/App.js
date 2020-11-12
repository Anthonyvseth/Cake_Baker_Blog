import React from 'react';
import './style/App.css';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Switch, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Router path='/' />
    </Switch>
    </Router>
  );
}

export default App;
 