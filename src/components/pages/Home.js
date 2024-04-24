import "./Home.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <h2>Top Products</h2>
        <div className="top-products">
          <div className="product-card">
            <h3>Mac Book Pro M3</h3>
            <img
              src="https://www.lotespc.es/wp-content/uploads/2024/01/MACBOOK-PRO-13-.jpg"
              alt="MacBook"
            />
            <div className="bp-card">
                <p>$ 3000</p>
                <button>Add to cart</button>
            </div>
            
          </div>
          <div className="product-card">
          <h3>Casio Gshock G2100</h3>
            <img
              src="https://www.casio.com/content/dam/casio/product-info/locales/my/en/timepiece/product/watch/G/GA/GA2/ga-2100pts-8a/assets/GA-2100PTS-8A.png.transform/color-variation/image.png"
              alt="AirpodsMax"
            />
            <div className="bp-card">
                <p>$ 3000</p>
                <button>Add to cart</button>
            </div>
          </div>
          <div className="product-card">
          <h3>Airpods Pro Max</h3>
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000"
              alt="Casio GShock"
            />
            <div className="bp-card">
                <p>$ 3000</p>
                <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
