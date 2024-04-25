import ProductCard from "../product/ProductCard";

const TopProducts = () => {
    return(
        <div className="body">
        <h2>Top Products</h2>
        <div className="top-products">
          <ProductCard title="Mac Book Pro M3" imgUrl="https://www.lotespc.es/wp-content/uploads/2024/01/MACBOOK-PRO-13-.jpg" name="Mac Book Pro" price="3000"/>
          <ProductCard title="Casio Gshock G2100" imgUrl="https://www.casio.com/content/dam/casio/product-info/locales/my/en/timepiece/product/watch/G/GA/GA2/ga-2100pts-8a/assets/GA-2100PTS-8A.png.transform/color-variation/image.png" name ="gshock" price="100"/>
          <ProductCard title="Airpods Pro Max" imgUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000" name ="airpods" price="250"/>
        </div>
      </div>
    )
}

export default TopProducts;