function Basket(props) {
  const basketList = props.basket.map((item, index) => (
    <p key={index}>
      {item.title} X {item.quantity}
    </p>
  ));

  const getTotal = props.basket.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * parseInt(currentValue.quantity),
    0
  );

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
      <hr />
      {basketList}
      <hr />
      <div className="subtitle">
        Total : £ {Math.round(getTotal * 100) / 100}
      </div>
    </div>
  );
}
export default Basket;
