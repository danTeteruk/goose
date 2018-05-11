import React from 'react';
import Product from './product';
import './home.css';

const Home = (select) => {
  return (
    <div className="box">
      <div className="box-flow u-column">
        <div className="u-flex">
          <h1 className="u-auto">Demo FLOW</h1>
        </div>
        <div className="u-flex u-wrap">
          {select.select.products.map(item => <Product item={item} rows={select.select.rows} key={item.name} /> )}
        </div>
      </div>
    </div>
  )
};

export default Home;
