// ProductsList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products=[], onDelete="", onEdit="" }) => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ProductsList;
