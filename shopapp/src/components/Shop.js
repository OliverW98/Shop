import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductList from "../ProductList";
import Basket from "./Basket";

function Shop() {
  const [products] = useState(ProductList);
  const [basket, setBasket] = useState([]);

  function addToBasket(title, quantity, price) {
    const newOrder = { title, quantity, price };
    const tempBasket = [...basket, newOrder];
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
