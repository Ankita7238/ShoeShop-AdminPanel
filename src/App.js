// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductForm />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
