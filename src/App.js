// src/App.js
import React,{useState} from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div>
      <Header openCart={toggleCart}/>
      {isCartOpen && <Cart cartOpen={setIsCartOpen} />}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductForm />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
