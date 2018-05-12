import React from 'react';
import './product.css';

const Product = ({item, rows, toggleProduct}) => {
  return (
    <div className={`w-${rows}`}>
      <div
        className={`product-box ${item.selected ? "active" : ''} ${item.isSuggested ? "suggested" : ''}`}
        onClick={() => {toggleProduct(item.id)}}>
        <div className="icon-box">
          <div className={`icon icon-${item.name}`} />
        </div>
        <div className="title-holder"><span>{item.name}</span></div>
      </div>
    </div>
  );
};

export default Product;
