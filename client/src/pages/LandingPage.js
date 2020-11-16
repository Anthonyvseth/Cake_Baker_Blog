import React from 'react'
// import TravelImg from '../assets/travel.png'
// import TravelPath from '../assets/path.svg'
import Hero from '../pages/Hero'
import '../style/Landing.css'
import NavBar from '../components/NavBar'

export default ({ children }) => {
  return (
    <div className="landing-page flex-row">
      <section className="left flex-sm flex-col">
        <div className="mask flex-col">
          <div className="content-wrapper flex-col">
            <h3 className="logo">Logo</h3>
            <div className="hero-wrapper flex-row">
              <div className="cl-left flex-col">
                
              </div>
              <div className="cl-right flex-col">
                <div className="path-wrapper">
                  {/* <img src={TravelPath} alt="path" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          {/* <img src={TravelImg} alt="water" /> */}
        </div>
      </section>
      <section className="right flex-sm">
        <NavBar />
        {children}
      </section>
    </div>
  )
}
