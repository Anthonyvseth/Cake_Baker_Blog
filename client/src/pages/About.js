import React from 'react'
import Hero from './Hero'
import {aboutObj} from './HomePage/Data'

function About() {
    return (
        <>
            <Hero {...aboutObj} />
        </>
    )
}

export default About
