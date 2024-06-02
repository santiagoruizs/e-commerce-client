import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  let loggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
    return(
      <div className='header'>
        <div className="menu-dropdown">
          <img src={menu} className='icon' alt="menu icon"/>
          <div className="menu-dropdown-content">
            <NavLink className ="link" to ="/home">Home</NavLink>
            <NavLink className ="link" to ="/store">Store</NavLink>
            {loggedIn && <NavLink className ="link" to="/cart">Cart</NavLink>}
            {loggedIn && <NavLink className ="link" to="/orders">Orders</NavLink>}
            {/* <NavLink className ="link" to="">Bio</NavLink>
            <NavLink className ="link" to="">Contact Us</NavLink> */}
          </div>
        </div>
        <NavLink to="/home"><button>Ecom-RS</button></NavLink>
        <div className='user-dropdown' >
          <img src={user} className='icon' alt="user icon"/>
          <div className="user-dropdown-content">
          {loggedIn && <NavLink className ="link" to="/profile">Profile</NavLink>}
          {loggedIn && <NavLink className ="link" to="/login" onClick={() => {
              localStorage.removeItem('isLoggedIn')
              localStorage.removeItem('user email')}} >Logout</NavLink>}
            {!loggedIn && <NavLink className ="link" to="/login">Login</NavLink>}
            {!loggedIn && <NavLink className ="link" to ="/signup">Sign-Up</NavLink>}
          </div>
        </div>
        
      </div>
    )
}

export default Header;