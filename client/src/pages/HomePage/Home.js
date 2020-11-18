import React from 'react'
import Hero from '../Hero'
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour, 
    homeObjFive
    } from './Data'

function Home() {
    return (
        <>
            <Hero {...homeObjOne}/>
            <Hero {...homeObjTwo}/>
            <Hero {...homeObjThree}/>
            <Hero {...homeObjFour}/>
            <Hero {...homeObjFive}/>
        </>
    )
}

export default Home
