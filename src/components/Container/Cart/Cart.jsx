import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import './Cart.css';
const Cart = ({ cartConditon, getTrash, product, emptyProduct }) => {
  const value = cartConditon ? ' block ' : ' hide ';
  const [random, setRandom] = useState([]);
  const randomHandle = () => {
    const randomProduct = Math.floor(Math.random() * product.length);
    setRandom(product[randomProduct]);
  };
  return (
    <div className={'cart-container' + value}>
      <h3 className="cart-title">Order Summary</h3>
      <div className="product-container">
        {product.map((eachProduct) => (
          <Product
            key={eachProduct.id}
            getTrash={getTrash}
            data={eachProduct}
          />
        ))}
      </div>
      <h3 className="cart-title">Suggest for you</h3>
      <hr />
      <br />
      {random ? (
        <div className={random ? 'random-item' : ''}>
          <img src={random?.img} alt="" />
          <h3>{random?.name}</h3>
        </div>
      ) : (
        ''
      )}
      <button className="random-btn" onClick={() => randomHandle()}>
        Get suggesion Product{' '}
      </button>

      <br />
      <button className="reset-btn" onClick={emptyProduct}>
        {' '}
        Try Again{' '}
      </button>
    </div>
  );
};
const Product = ({ data, getTrash }) => {
  const { img, id, name, price } = data;
  return (
    <div className="product-item">
      <img src={img} className="cart-img" alt="" />
      <h3>{name}</h3>
      <span className="trash-btn" onClick={() => getTrash(data)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};
export default Cart;
