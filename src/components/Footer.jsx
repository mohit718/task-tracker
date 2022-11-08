import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='centered'>
        <h6>Copyright &copy; 2022.</h6>
        <Link to='/about'><p>About Us</p></Link>
    </div>
  )
}
