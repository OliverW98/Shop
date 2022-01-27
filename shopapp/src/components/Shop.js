import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Basket from "./Basket";

const initialData = {
  data: [],
  loading: true,
  error: false,
};

function Shop(props) {
  const [products, setProducts] = useState(initialData);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("http://localhost:9000/getProducts");
        const json = await res.json();
        const newState = {
          data: json,
          loading: false,
          error: false,
        };
        setProducts(newState);
      } catch (e) {
        console.log(e);
        const newState = {
          data: undefined,
          loading: false,
          error: true,
        };
        setProducts(newState);
      }
    };

    loadProducts();
  }, []);

  function addToBasket(title, quantity, price, id) {
    let tempBasket = [...basket];
    let itemFound = false;
    tempBasket.forEach((item) => {
      if (item.id === id) {
        itemFound = true;
        item.quantity = parseInt(item.quantity) + parseInt(quantity);
      }
    });
    if (!itemFound) {
      const newOrder = { title, quantity, price, id };
      tempBasket = [...basket, newOrder];
    }
    setBasket(tempBasket);
  }

  function removeFromBasket(id, quantity) {
    let tempBasket = [...basket];
    tempBasket.forEach((item, index) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          tempBasket.splice(index, 1);
        } else {
          item.quantity = parseInt(item.quantity) - parseInt(quantity);
        }
      }
    });

    setBasket(tempBasket);
  }

  const listOfProducts = products.data.map((prod, index) => (
    <ProductCard
      key={index}
      id={prod._id}
      title={prod.title}
      type={prod.type}
      description={prod.description}
      price={prod.price}
      rating={prod.rating}
      addToBasket={addToBasket}
      isUserSignedIn={props.isUserSignedIn}
    />
  ));

  if (products.error) {
    return <div>Something went wrong!</div>;
  }

  if (products.loading) {
    return <div>Data loading...</div>;
  }

  return (
    <div className="columns">
      <div className="column is-three-quarters">{listOfProducts}</div>
      <div className="column">
        <Basket
          basket={basket}
          user={props.user}
          isUserSignedIn={props.isUserSignedIn}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
        />
      </div>
    </div>
  );
}

export default Shop;
