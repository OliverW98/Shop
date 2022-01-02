function ProductCard(props) {
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
            <button className="button is-primary is-outlined is-rounded">
              Add to Basket
            </button>
          </div>
          <div className="field">
            <label className="label">Quantity :</label>
            <input className="number" type="number" min="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
