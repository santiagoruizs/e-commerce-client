import ButtonAC from '../common/ButtonAC'

const ProductCard = (props) => {
  return (
    <div>
      <div className="product-card">
        <h3>{props.title}</h3>
        <img src={props.imgUrl} alt={props.name} />
        <div className="bp-card">
          <p>{props.price}</p>
          <ButtonAC text = "ADD TO CART"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
