import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import './Store.css'
import ContentFilter from "../layout/ContentFilter";
// import filter from '../../assets/images/configuration.png'
const Store = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterOpen, setFilterOpen] = useState(true);
    const [filter, setFilter] = useState('All')
    const [order, setOrder] = useState('Price')
    const togglePanel = () => {
        setFilterOpen(!filterOpen);
    };

    useEffect(() => {
        const getProductData = async() => {
            const response = await getProducts()
            setProducts(response)
        };
        getProductData();
    }, [])

    useEffect(() => {
            const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter) 
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b) => {
                if(order === 'Price'){
                    const priceA = Number(a.price.replace(/[^0-9.-]+/g,""));
                    const priceB = Number(b.price.replace(/[^0-9.-]+/g,""));
                
                    // Compare the prices
                    return priceB - priceA;    
                }else if(order === 'Stock'){
                    return b.stock - a.stock
                }
                return true; 
            })
            console.log(sortedProducts)
            setFilteredProducts(sortedProducts)
        }, [products,filter, order])

    return (
        <div className="store-container">
            <ContentFilter isOpen = {filterOpen} togglePanel = {togglePanel} filter={filter} setFilter={setFilter} order = {order} setOrder={setOrder}/>
            {/* <div className="filter-button-container">
                <img src={filter} className = {`filter-button${!filterOpen ? "" : "-hide"}`} onClick={togglePanel}/>
            </div> */}
            <div className="product-list">
                {filteredProducts.map(product => <ProductCard title={product.name} imgUrl={product.imageurl} name={product.name} price={product.price}/>)}
            </div>
        </div>
    )
}
export default Store;