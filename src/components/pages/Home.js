import "./Home.css";
import Banner from "../layout/Banner";
import TopProducts from "../layout/TopProducts";
const Home = () => {
  return (
    <div className="body-container">
      <Banner />
      <TopProducts />
    </div>
  );
};

export default Home;
