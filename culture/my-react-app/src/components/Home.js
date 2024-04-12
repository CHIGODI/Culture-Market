import React from 'react'
import { Link } from 'react-router-dom';

// import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='landing'>
    <div className='overlay'></div>
    <div className='content'>
      <h1>Welcome To Elegance Store</h1>
      <p>Discover amazing products and shop now!</p>
      <Link to='/products' className='cta-btn'>Shop Now</Link>
    </div>
  </div>
  )
}

export default Home;