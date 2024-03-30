import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories/Laptop/products?company=AMZ&top=10&minPrice=1&maxPrice=10000');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>{product.productName}</div>
            <div>Company: {product.company}</div>
            <div>Category: {product.category}</div>
            <div>Price: {product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
