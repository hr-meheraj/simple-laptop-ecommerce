import React from 'react';
import './Container.css';
import Card from './Card/Card';
import Cart from './Cart/Cart';
const Container = ({ cartConditon }) => {
  const [getProduct, setProduct] = React.useState([]);
  const getProductFunc = (product) => {
    const newProduct = [...getProduct, product];
    if (getProduct.length <= 4) {
      if (getProduct.length == 4) {
        alert("You have cart 4 items and you can't Add more");
      }
      setProduct(newProduct);
    } else {
      setProduct(getProduct);
    }
  };
  const emptyProduct = () => {
    setProduct([]);
  };
  const getTrash = (trash) => {
    console.log(getProduct);
    console.log(trash);
    const arr = getProduct.filter(function (el) {
      return el.id !== trash.id;
    });
    setProduct(arr);
  };
  const uniqueProduct = [...new Set(getProduct)];
  return (
    <div className="grid-container">
      <Card product={getProductFunc} />
      <Cart
        getTrash={getTrash}
        emptyProduct={emptyProduct}
        product={uniqueProduct}
        cartConditon={cartConditon}
      />
    </div>
  );
};

export default Container;
