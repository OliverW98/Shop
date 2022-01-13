function Basket(props) {
  async function purchaseBasket() {
    let date = new Date();
    const data = {
      userID: props.user[0]._id,
      purchased: date,
      items: props.basket,
    };
    try {
      const res = await fetch("http://localhost:9000/purchaseBasket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      return json;
    } catch (e) {
      console.error(e);
    }
  }

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
        <div className="media-content">
          <i className="fas fa-shopping-basket fa-2x is-pulled-right"></i>
        </div>
      </div>
      <hr />
      {props.isUserSignedIn ? (
        basketList
      ) : (
        <b>Please Sign in to purchase items</b>
      )}
      <hr />
      <div className="media">
        <div className="media-left">
          <div className="subtitle">
            Total : £ {Math.round(getTotal * 100) / 100}
          </div>
        </div>
        <div className="media-content">
          <button
            className="button is-primary is-pulled-right"
            disabled={!props.isUserSignedIn}
            onClick={purchaseBasket}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
export default Basket;
