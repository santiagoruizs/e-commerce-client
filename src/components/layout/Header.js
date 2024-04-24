import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
const Header = () => {
    return(
      <div className='header'>
        <img src={menu} className='icon' alt="menu icon"/>
        <h1 onClick={() => console.log("hey")}>Ecom-RS</h1>
        <img src={user} className='icon' alt="user icon"/>
      </div>
    )
}

export default Header;