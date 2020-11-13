import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import '../style/Hero.css'

function Hero({
    lightbg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgstart
}) {
    return (
        <>
         <div className={lightbg ? 'home__hero-section' : 'home__hero-section darkbg'}>
            <div className='.container'>
                <div className='row home_hero-row'>
                     
                </div>
            </div>
         </div>   
        </>
    )
}

export default Hero
