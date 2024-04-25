import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
      <div className='header'>
        <img src={menu} className='icon' alt="menu icon"/>
        <NavLink to="/home"><button>Ecom-RS</button></NavLink>
        <img src={user} className='icon' alt="user icon"/>
      </div>
    )
}

export default Header;