import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date()
  return (
    <div className='footer'>
      portfolio.sri &copy; {date.getFullYear()}
    </div>
  )
}

export default Footer
