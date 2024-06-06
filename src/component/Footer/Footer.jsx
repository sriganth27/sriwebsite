import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date()
  return (
    <div className='footer'>
      portfolio.sri &copy; copyright {date.getFullYear()}
    </div>
  )
}

export default Footer
