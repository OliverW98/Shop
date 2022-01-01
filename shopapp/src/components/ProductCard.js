function ProductCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">{props.type}</p>
          </div>
        </div>

        <div className="content">
          {props.description}
          <p>{props.price}</p>
          <p>{props.rating} Stars</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
