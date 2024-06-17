// src/components/Header.js
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Header = ({openCart}) => {
  const { cart } = useContext(ProductContext);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl">T-Shirts Shop Admin Panel</h1>
      <div className="relative">
        <button className="bg-blue-800 p-2 rounded-full " onClick={openCart}>
          Cart
        </button>
        <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
