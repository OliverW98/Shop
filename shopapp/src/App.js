import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductList from "./ProductList";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";

function App() {
  const [products, setProdcuts] = useState(ProductList);

  const listOfProducts = products.map((prod, index) => (
    <ProductCard
      key={index}
      title={prod.title}
      type={prod.type}
      description={prod.description}
      price={prod.price}
      rating={prod.rating}
    />
  ));

  return (
    <div className="container">
      <Navbar />
      <div className="columns">
        <div className="column is-three-quarters">{listOfProducts}</div>
        <div className="column">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
