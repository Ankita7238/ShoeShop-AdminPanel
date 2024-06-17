// src/components/ProductForm.js
import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    small: '',
    medium: '',
    large: ''
  });

  const { addProduct } = useContext(ProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ ...product, small: parseInt(product.small), medium: parseInt(product.medium), large: parseInt(product.large) });
    setProduct({ id: '', name: '', description: '', price: '', small: '', medium: '', large: '' });
  };

  return (
    <>
      <h3 className='text-center text-2xl font-bold text-blue-700 m-2'>Product-Form</h3>
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 ">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="id" placeholder="Shoe ID" value={product.id} onChange={handleChange} className="p-2 border" required />
          <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} className="p-2 border" required />
          <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} className="p-2 border" required />
          <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="p-2 border" required />
          <div className='mx-auto'>
            <input type="number" name="small" placeholder="Small Size Quantity" value={product.small} onChange={handleChange} className="mr-2 p-2 border" required />
            <input type="number" name="medium" placeholder="Medium Size Quantity" value={product.medium} onChange={handleChange} className="mr-2 p-2 border" required />
            <input type="number" name="large" placeholder="Large Size Quantity" value={product.large} onChange={handleChange} className="mr-2 p-2 border" required />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded">Add Product</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
