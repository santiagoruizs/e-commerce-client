import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
      <div className='header'>
        <div className="menu-dropdown">
          <img src={menu} className='icon' alt="menu icon"/>
          <div class="menu-dropdown-content">
            <NavLink className ="link" to ="/home">Home</NavLink>
            <NavLink className ="link" to ="/store">Store</NavLink>
            {/* <NavLink className ="link" to="">Bio</NavLink>
            <NavLink className ="link" to="">Contact Us</NavLink> */}
          </div>
        </div>
        <NavLink to="/home"><button>Ecom-RS</button></NavLink>
        <div className='user-dropdown' >
          <img src={user} className='icon' alt="user icon"/>
          <div class="user-dropdown-content">
            {/* <NavLink className ="link" to="/">Profile</NavLink> */}
            <NavLink className ="link" to ="/signup">Sign-Up</NavLink>
            <NavLink className ="link" to="/login">Login</NavLink>
          </div>
        </div>
        
      </div>
    )
}

export default Header;