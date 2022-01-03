import React, { useEffect } from "react";
function Basket(props) {
  useEffect(() => {
    console.log(props.basket);
  }, [props.basket]);

  // const basketList = props.basket.forEach((item) => {
  //   return (
  //     <p>
  //       {item.title} X {item.quantity}
  //     </p>
  //   );
  // });

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
      {/* {basketList} */}
    </div>
  );
}
export default Basket;
