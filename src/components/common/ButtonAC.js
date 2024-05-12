import './Button.css'
import shopping from '../../assets/images/shopping-cart.svg'
const ButtonAC = (props) => {
    return(
        <button className="button-ac" type={props.type} onClick={props.onClick}><img src={shopping} alt="icon"/><p>{props.text}</p></button>
    )
}

export default ButtonAC;