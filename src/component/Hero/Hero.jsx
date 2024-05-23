import React from 'react'
import sriganth from './sri3.jpg'
//import sriganth from './sriganth.jpg'

import java from '../img/java-icon.jpg'
import html2 from '../img/html2.png'
import react2 from '../img/react2.png'
import js from '../img/jss.png'
import css from '../img/csss.png'
import mysql from '../img/mysql.png'

import './Hero.css'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h3>Welcome to My portfolio</h3>
                <h1>I am Sriganth </h1>
                <h2>Software Developer</h2>
                <p>Passionate software developer with a strong background in creating innovative solutions and delivering high-quality code for diverse projects.</p>
               
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
                        <img src={mysql} alt="" />
                    </div>

                    <div className='tech-icon'>
                        <img src={html2} alt="" />

                    </div>

                    <div className='tech-icon'>
                        <img src={css} alt="" />

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
