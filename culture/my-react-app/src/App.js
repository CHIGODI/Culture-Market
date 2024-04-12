import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/AboutUs';
import AddCart from './components/AddCart';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<AddCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;