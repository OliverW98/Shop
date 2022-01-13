import React, { useState } from "react";
function ProductCard(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <p className="title is-4">{props.title}</p>
          <p className="subtitle is-6">{props.type}</p>
        </div>
        <div className="media-content">
          {props.description}
          <p>£ {props.price}</p>
          <p>{props.rating} Stars</p>
        </div>
        <div className="media-right">
          <div className="field">
            <button
              type="submit"
              className="button is-primary is-outlined is-rounded"
              onClick={() =>
                props.addToBasket(props.title, quantity, props.price)
              }
              name={props.title}
              disabled={!props.isUserSignedIn}
            >
              Add to Basket
            </button>
            <br />
            <label className="label">Quantity :</label>
            <input
              className="number"
              type="number"
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              disabled={!props.isUserSignedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
