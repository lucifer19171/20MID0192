import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/categories/Laptop/products/${productId}?company=AMZ`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div>Name: {product.productName}</div>
      <div>Company: {product.company}</div>
      <div>Category: {product.category}</div>
      <div>Price: {product.price}</div>
      <div>Rating: {product.rating}</div>
      <div>Discount: {product.discount}</div>
      <div>Availability: {product.availability}</div>
    </div>
  );
};

export default ProductDetails;
