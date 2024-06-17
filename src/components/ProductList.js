// src/components/ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductList = () => {
  const { products, addToCart, removeFromStock } = useContext(ProductContext);

  const handleBuy = (product, size) => {
    removeFromStock(product.id, size);
    console.log(product)
  };

  return (
    <div className="p-4">
      <h3 className='text-center text-2xl font-bold text-blue-700 m-2'>Product List</h3>
      {products.map(product => (
        <div key={product.id} className="p-4 bg-white shadow flex-col gap-x-5 justify-center items-center mb-4">
            <div className='flex justify-between'>
                <div className='w-2/6'>
                    <h4 className="text-2xl font-bold">{product.name}</h4>
                    <p className='text-sm font-medium text-wrp mr-3'>{product.description}</p>
                    <p className="text-gray-600">Price: Rs.{product.price}</p>
                </div>
          
                <div className='flex justify-around gap-x-3 w-4/6'>
                    <div className="flex gap-x-1 items-center">
                        <button onClick={() => handleBuy(product, 'small')} disabled={product.small <= 0} className="bg-blue-500 text-white px-2 py-1 rounded">Buy Small</button>
                        <span className='border-2 border-solid border-gray-400  bg-gray-200 overflow-hidden rounded-lg px-3 text-lg font-bold'>{product.small}</span>
                    </div>

                    <div className="flex gap-x-1 items-center">
                        <button onClick={() => handleBuy(product, 'medium')} disabled={product.medium <= 0} className="bg-blue-500 text-white px-2 py-1 rounded">Buy Medium</button>
                        <span className='border-2 border-solid border-gray-400  bg-gray-200 overflow-hidden rounded-lg px-3 text-lg font-bold'>{product.medium}</span>
                    </div>

                    <div className="flex gap-x-1 items-center">
                        <button onClick={() => handleBuy(product, 'large')} disabled={product.large <= 0} className="bg-blue-500 text-white px-2 py-1 rounded">Buy Large</button>
                        <span className='border-2 border-solid border-gray-400  bg-gray-200 overflow-hidden rounded-lg px-3 text-lg font-bold'>{product.large}</span>
                    </div>
                </div>      
            </div> 
       
            <div className='justify-center items-center flex'>
                <button onClick={() => addToCart(product, 'all')} className="w-full m-4 bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>           
        </div>
      ))}
    </div>
  );
};

export default ProductList;
