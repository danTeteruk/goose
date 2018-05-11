import React from 'react';
import './product.css';

const Product = (item, rows) => {
  return (
    <div className={`w-${item.rows}`}>
      <div className="product-box">{item.item.name}</div>
    </div>
  );
};

export default Product;
