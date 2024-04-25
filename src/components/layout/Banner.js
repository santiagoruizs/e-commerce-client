import { NavLink, useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
    return(
      <div className='banner'>
        <div className='text-container'>
            <h1>Your gateway for a modern tecnologic life</h1>
            <p>Simplify your tech shopping experience with us! Explore a world of innovation where simplicity meets sophistication.  </p>
            <NavLink to ="/store"><button>Shop Now!</button></NavLink>
        </div>
      </div>
    )
}

export default Banner;