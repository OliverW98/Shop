import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductList from "../ProductList";
import Basket from "./Basket";

function Shop(props) {
  const [products] = useState(ProductList);
  const [basket, setBasket] = useState([]);

  function addToBasket(title, quantity, price) {
    let tempBasket = [...basket];
    let itemFound = false;
    tempBasket.forEach((item) => {
      if (item.title === title) {
        itemFound = true;
        item.quantity = parseInt(item.quantity) + parseInt(quantity);
      }
    });
    if (!itemFound) {
      const newOrder = { title, quantity, price };
      tempBasket = [...basket, newOrder];
    }
    setBasket(tempBasket);
  }

  const listOfProducts = products.map((prod, index) => (
    <ProductCard
      key={index}
      title={prod.title}
      type={prod.type}
      description={prod.description}
      price={prod.price}
      rating={prod.rating}
      addToBasket={addToBasket}
      isUserSignedIn={props.isUserSignedIn}
    />
  ));

  return (
    <div className="columns">
      <div className="column is-three-quarters">{listOfProducts}</div>
      <div className="column">
        <Basket
          basket={basket}
          user={props.user}
          isUserSignedIn={props.isUserSignedIn}
        />
      </div>
    </div>
  );
}

export default Shop;
