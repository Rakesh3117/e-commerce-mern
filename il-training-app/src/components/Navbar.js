import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/Navbar.css'
import Logo from '../assets/Logo-01.png'

const Navbar = ({cartItems}) => {
  return (
    <div className='navbar-main-container'>
        <div className='navbar-sub-container'>
            <div className='navbar-logo-container'>
                <img src={Logo} alt="Logo" className='logo-image' />
            </div>
            <div className='navbar-links-container'>
                <div>
                    <Link to="/"><h1 className='navbar-link-text'>Home</h1></Link>
                </div>
                <div>
                    <Link to="/cart">
                        <h1 className='navbar-link-text'>Cart <span className='cart-count'>{cartItems.length}</span></h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
