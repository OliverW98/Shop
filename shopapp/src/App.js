import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductList from "./ProductList";
import Navbar from "./components/Navbar";

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
      {listOfProducts}
    </div>
  );
}

export default App;
