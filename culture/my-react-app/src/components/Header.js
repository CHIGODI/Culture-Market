import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='logo'> logo </div>

      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

      <div className='links'>
        <Link to="/" className='home'>Home</Link>
        <Link to="/products" className='products'>Products</Link>
        <Link to="/about" className='about'>About Us</Link>
        <Link to="/cart" className='cart'>Cart</Link>
        <Link to="/login" className='login'>Login</Link>
      </div>
    </div>
    </>
  )
}

export default Header;