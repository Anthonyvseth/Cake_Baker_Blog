import React from 'react'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import '../style/Hero.css'

function Hero({
    lightbg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
         <div className={lightbg ? 'home__hero-section' : 'home__hero-section darkbg'}>
            <div className='.container'>
                <div className='row home_hero-row' style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero=subtitle dark'}>
                                {description}
                            </p>
                            <Link to='/sign-up'>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} classname="img.home__hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
         </div>   
        </>
    )
}

export default Hero
