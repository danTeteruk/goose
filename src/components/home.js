import React from 'react';
import Product from './product';
import './home.css';

const Home = ({select, toggleProduct, showAll}) => {
  function renderLink() {
    let active = select.products.filter(item => (item.selected === true))
    let aliases = active.map(item => item.alias)

    if (aliases.length < 1) { return null };

    let link = "https://tilbud.forsikringsportalen.dk/&" + aliases.join('&')
    return (
      <a className="link" href={link} >I wish it!</a>
    )
  };

  return (
    <div className="box">
      <div className="box-flow u-column">
        <div className="u-flex u-wrap">
          {select.products.map((item, index) =>  {
            return index < select.max ? <Product item={item} rows={select.rows} toggleProduct={toggleProduct} key={item.name} /> : null
          } )}
        </div>
        {select.max < select.products.length && <div onClick={showAll} className="show">show All products</div>}
        {renderLink()}
      </div>
    </div>
  )
};

export default Home;
