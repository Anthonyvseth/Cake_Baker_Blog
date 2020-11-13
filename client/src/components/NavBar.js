import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                     <Link to='/' className="navbar-logo"
                     onclick={closeMobileMenu}>
                     <MdCake className="navbar-icon" />
                        Lyss's Delish's
                     </Link>
                     <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                     <li className="nav-item">
                         <Link to='/' className='nav-links'>
                             Home
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/About' className='nav-links'>
                             About
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/services' className='nav-links'>
                             Services
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/Discover' className='nav-links'>
                             Discover
                         </Link>
                     </li>
                     <li className="nav-btn">
                         {button ? ( 
                             <Link to='/sign-up' className='btn-link'>
                                 <Button buttonStyle="btn--outline">SIGN UP</Button>
                             </Link>
                         ): (
                             <Button to='/sign-up' buttonStyle='btn--outline'
                             buttonSize='btn--mobile'>SIGN UP</Button>
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
