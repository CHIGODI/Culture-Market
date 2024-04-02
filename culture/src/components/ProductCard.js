import React from 'react';
import papariBeltImage from '../images/Papai Belt - L.jpeg';


const ProductCard = () => {
  return (
      <div className="product-list">
      <div className="product-card">
          <img id='img' src={papariBeltImage} alt='art' />
          <h2>Product 1</h2>
          <p>Price: $19.99</p>
          <p>Description: Description for Product 1</p>
        </div>
      <div className="product-card">
         <img id='img' src={papariBeltImage} alt='art' />
          <h2>Product 2</h2>
          <p>Price: $29.99</p>
          <p>Description: Description for Product 2</p>
        </div>
      <div className="product-card">
         <img id='img' src={papariBeltImage} alt='art' />
          <h2>Product 3</h2>
          <p>Price: $39.99</p>
          <p>Description: Description for Product 3</p>
        </div>
      <div className="product-card">
         <img id='img' src={papariBeltImage} alt='art' />
          <h2>Product 4</h2>
          <p>Price: $39.99</p>
          <p>Description: Description for Product 3</p>
        </div>
      </div>
  );
};

export default ProductCard;

