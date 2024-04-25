import { Outlet } from "react-router-dom"
import "./Home.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


const Root = () => {
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root;