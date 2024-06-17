// src/components/Cart.js
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="p-4 bg-gray-100">
      <h3 className='text-center text-xl font-bold text-blue-700 m-2'>Cart</h3>
      {cart.map(item => (
        <div key={item.id + item.size} className="p-4 bg-white shadow mb-4">
          <h4 className="text-lg font-bold">{item.name}</h4>
          <p>{item.description}</p>
          <p className="text-gray-600">Price: ${item.price}</p>
          <p className="text-gray-600">Quantity:</p>
          <p className="text-gray-600">{item.quantity} * S, {item.quantity} * M, {item.quantity} * L</p>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold">Total: ${total}</p>
        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
