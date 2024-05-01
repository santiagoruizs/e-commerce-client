import './Button.css'
const Button = (props) => {
    return(
        <button class="button-3" role="button" type={props.type} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;