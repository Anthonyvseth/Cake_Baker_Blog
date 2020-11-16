import React from 'react'
import NavBar from './NavBar'

export default ({ children, authenticated, currentUser }) => (
  <div>
    <NavBar
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
  </div>
)

