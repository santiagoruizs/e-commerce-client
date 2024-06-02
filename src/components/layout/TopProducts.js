import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import { getTopProducts } from "../../api/api";
const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([])
  useEffect( () => {
      const getTopProductsData = async() => {
          const response = await getTopProducts()
          setTopProducts(response)
      };
      getTopProductsData();
  }, [])
    return(
        <div className="body">
        <h2>Top Products</h2>
        <div className="top-products">
          {topProducts.map(product => <ProductCard title={product.name} imgUrl={product.imageurl} name={product.name} price={product.price} id = {product.id}/>)}
        </div>
      </div>
    ) 
}

export default TopProducts;