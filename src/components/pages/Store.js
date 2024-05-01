import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import './Store.css'
const Store = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        const getProductData = async() => {
            const response = await getProducts()
            setProducts(response)
        };
        getProductData();
    }, [])
    return (
        <div className="store-container">
            <div className="store-filter"> 
            <h3>Apply Filters</h3>
                <ul>
                    <li>Computers</li>
                    <li>Lifestyle</li>
                    <li>Accesories</li>
                </ul>
            </div>
            <div className="product-list">
                {products.map(product => <ProductCard title={product.name} imgUrl={product.imageurl} name={product.name} price={product.price}/>)}
            </div>
        </div>
    )
}
export default Store;