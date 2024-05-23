import React from 'react';
import './MobileNav.css';
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          
          <ul>
            <li>
              <Link to="./" className='menu-item' >Home</Link>
            </li>

            <li>
              <Link to="./skills" className='menu-item'>Skills</Link>
             
            </li>
            <li>
              <Link to="./project" className='menu-item' >Project Details</Link>
            </li>
            <li>
              <Link to ="./contact" className='menu-item' >Contact Me</Link>
            </li>
            <li>
            <div className='tech-icon2'>
              <a href='https://github.com/sriganth27/' target="_blank" rel="noopener noreferrer" className='tech-icon2'>
              <div className='image-container'>
                <img src="../assets/github2-Logo.png" alt="GitHub profile" />
                </div>
              </a>
              </div>
            </li>
            <li>
              <div className='tech-icon2'>
                <a href="https://www.linkedin.com/in/sriganth-g-502589270/" target="_blank" rel="noopener noreferrer" className='tech-icon2'>
                  <div className='image-container'>
                    <img src="../assets/linkedin2-logo.png" alt="LinkedIn Profile" />
                  </div>
                </a>
              </div>
            </li>
            

          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
