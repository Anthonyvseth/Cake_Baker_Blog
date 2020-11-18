import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdCake } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import '../style/NavBar.css'
import { IconContext } from 'react-icons/lib'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    
    useEffect(() => {
        showButton()
    }, [])

    

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
            <div className="navbar">
                 <div className="navbar-container container">
                     <Link to='/' className="navbar-logo" onclick={closeMobileMenu}>
                     <MdCake className="navbar-icon" />
                        Lyss's Delish's
                     </Link>
                     <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                     <li className="nav-item">
                         <NavLink to='/' className='nav-links' onClick={handleClick}>
                             Home
                         </NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink to='/about' className='nav-links' onClick={handleClick}>
                             About
                         </NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink to='/discover' className='nav-links' onClick={handleClick}>
                             UserPost
                         </NavLink>
                     </li>
                     <li className="nav-btn">
                         {button ? ( 
                             <NavLink to='/register' className='nav-active'>
                                 <Button buttonStyle="btn--outline">SIGN UP</Button>
                             </NavLink>
                         ): (
                             <NavLink
                                to='/register' 
                                activeclassName='nav-active'
                                onClick={handleClick}
                                >
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                SIGN UP
                                </Button>
                             </NavLink>
                         )}
                     </li>
                     <li className="nav-btn">
                         {button ? ( 
                             <NavLink to='/login' className='nav-active'>
                                 <Button buttonStyle="btn--outline">LOG IN</Button>
                             </NavLink>
                         ): (
                             <NavLink
                                to='/login' 
                                activeclassName='nav-active'
                                onClick={handleClick}
                                >
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                LOG IN
                                </Button>
                             </NavLink>
                         )}
                     </li>
                     <li className="nav-btn">
                         {button ? ( 
                             <NavLink to="/" onClick={() => localStorage.clear()} className='nav-active'>
                                 <Button buttonStyle="btn--outline">LOG OUT</Button>
                             </NavLink>
                         ): (
                             <NavLink
                                activeclassName='nav-active'
                                to="/" onClick={() => localStorage.clear()}
                                >
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                LOG OUT
                                </Button>
                             </NavLink>
                         )}
                         
                     </li>
                     </ul>
                 </div>
            </div>
        </IconContext.Provider>
        </>
        
    ) 
}

export default NavBar
