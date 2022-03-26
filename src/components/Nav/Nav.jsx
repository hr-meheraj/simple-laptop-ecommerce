import React,{useState} from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faCloudShowersHeavy, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons/faShower';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';

const Nav = ({showCardFunc}) => {
  const [showCart, setShowCart] = useState(true);
  const toggleCart = () => {
      setShowCart(!showCart);
      showCardFunc(showCart);
  }
  return (
    <nav>
      <div className="nav-container">
        <a href="#">
          <h4>Buy with Low Expensive</h4>
        </a>
        <button className='cart-btn' onClick={toggleCart}><FontAwesomeIcon icon={faCartShopping} size="lg"/> </button>
      </div>
    </nav>
  );
};

export default Nav;
