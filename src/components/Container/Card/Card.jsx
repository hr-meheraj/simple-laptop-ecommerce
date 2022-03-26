import React, { useEffect, useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
const Card = ({ product }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="card-container">
      {data.map((eachData) => (
        <EachCard key={eachData.id} product={product} data={eachData} />
      ))}
    </div>
  );
};

const EachCard = ({ data , product}) => {
  const { name, img, price, id } = data;
  const [click, setClick] = useState(false);
  return (
    <div className="card">
      <img src={img} className="card-img" />
      <div className="info">
        <h2>{name}</h2>
        <div className="flex">
          <h3> Price : </h3>
          <h3> ${price} </h3>
        </div>
        <button className="cart-add-btn "
            onClick={() => {product(data); setClick(true)}}>
          <span className="icon-side" >{click ? "Added" : "Add to Cart"}</span>{' '}
          <FontAwesomeIcon
            icon={faCartShopping}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
