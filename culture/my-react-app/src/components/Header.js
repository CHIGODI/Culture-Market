import React from 'react'
import Home from './Home';
import Products from './Products';
import About from './AboutUs';
import AddCart from './AddCart';
import Login from './Login';


const Header = () => {
  return (
    <div className='header'>
        <Home />
        <Products />
        <About />
        <AddCart />
        <Login />    
    </div>
  )
}

export default Header;