import React from "react";
function Basket(props) {
  const basketList = props.basket.map((item, index) => (
    <p key={index}>
      {item.title} X {item.quantity}
    </p>
  ));

  function getTotal() {
    let sum = 0;

    props.basket.forEach((item) => {
      sum = sum + item.price * parseInt(item.quantity);
    });

    return sum;
  }

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <div className="title">Basket</div>
        </div>
        <div className="media-right">
          <i className="fas fa-shopping-basket fa-2x"></i>
        </div>
      </div>
      {basketList} Total : £ {getTotal()}
    </div>
  );
}
export default Basket;
