function BasketItem(props) {
  return (
    <div className="media">
      <div className="media-left">
        <i
          onClick={() =>
            props.removeFromBasket(props.item.title, 1, props.item.price)
          }
          className="fas fa-minus"
        ></i>
      </div>
      <div className="media-content">
        <p>
          {props.item.title} X {props.item.quantity}
        </p>
      </div>
      <div className="media-right">
        <i
          onClick={() =>
            props.addToBasket(props.item.title, 1, props.item.price)
          }
          className="fas fa-plus"
        ></i>
      </div>
    </div>
  );
}
export default BasketItem;
