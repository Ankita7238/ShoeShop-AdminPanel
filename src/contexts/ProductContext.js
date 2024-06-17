// src/contexts/ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product, size) => {
    const existingCartItemIndex = cart.findIndex(item => item.id === product.id);
    console.log(cart)
    console.log()
    if (existingCartItemIndex !== -1) {
      // If item already exists in cart, update the quantity for that size
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex][size] += 1;
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item doesn't exist in cart, add it with initial quantity 1 for that size
      if(size='small')
        setCart([...cart, { ...product, [size]: 1, medium:0, large:0  ,quantity:1}]);
      else if(size='medium')
        setCart([...cart, { ...product, [size]: 1, small:0, large:0 ,quantity:1}]);
      else
        setCart([...cart, { ...product, [size]: 1, medium:0, small:0 ,quantity:1}]);
    }
  };

  const removeFromStock = (productId, size) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          [size]: product[size] - 1
        };
      }
      return product;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider value={{ products, cart, addProduct, addToCart, removeFromStock, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};
