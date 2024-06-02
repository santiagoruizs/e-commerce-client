import ButtonAC from '../common/ButtonAC'
import { NavLink } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <NavLink className="product-container" to={`/product/${props.id}`}>
      <div className="product-card">
        <h3>{props.title}</h3>
        <img src={props.imgUrl} alt={props.name} />
        <div className="bp-card">
          <p>{props.price}</p>
          <ButtonAC text = "ADD TO CART"/>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
