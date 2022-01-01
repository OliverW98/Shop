import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductList from "./ProductList";

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

  return <div className="container">{listOfProducts}</div>;
}

export default App;
