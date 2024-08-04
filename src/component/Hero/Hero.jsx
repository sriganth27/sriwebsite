import React from 'react'
import sriganth from './sri3.jpg'
//import sriganth from './sriganth.jpg'

import java from '../img/java-icon.jpg'
import html2 from '../img/html2.png'
import react2 from '../img/react2.png'
import js from '../img/jss.png'
import spring from '../img/spring-logo.png'
import mysql from '../img/mysql.png'


import './Hero.css'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h3>Welcome to My portfolio</h3>
                <h1>I am Sriganth </h1>
                <h2>Software Developer</h2>
                <p>As an aspiring Full Stack Developer, I am passionate about Java EE, Spring Boot, and React.js. I am eager to take on impactful projects and thrive in collaborative team environments. Committed to continuous learning and growth, I bring fresh perspectives and a drive for innovation to dynamic settings. Ready to contribute and make a meaningful impact.</p>
                <button className='btn2'>
                    <a href="/Sriganth_G_DMICE.pdf" download="Sriganth_DMICE.pdf">Download Resume</a>
                </button>
            </div>
          
            <div className='hero-img'>
                <div>
                   

                    <img className='sri' src={sriganth} alt="" />
                </div>
                <div>
                    <div className='tech-icon'>
                        <img src={react2} alt="" />
                    </div>
                    < div className='tech-icon'>
                        <img src={java} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={spring} alt="" />

                    </div>
                    <div className='tech-icon'>
                        <img src={mysql} alt="" />
                    </div>

                    <div className='tech-icon'>
                        <img src={html2} alt="" />

                    </div>

                   
                    



                    <div className='tech-icon'>
                        <img src={js} alt="" />
                    </div>


                </div>
                
            </div>
        </section>
    )
}

export default Hero
