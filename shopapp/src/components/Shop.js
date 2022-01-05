import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductList from "../ProductList";
import Basket from "./Basket";

function Shop() {
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
      console.log("cog");
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
    />
  ));

  return (
    <div className="columns">
      <div className="column is-three-quarters">{listOfProducts}</div>
      <div className="column">
        <Basket basket={basket} />
      </div>
    </div>
  );
}

export default Shop;
