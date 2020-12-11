import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children, authenticated, currentUser }) => (
  <div>
    <NavBar
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
  </div>
)
export default Layout 
