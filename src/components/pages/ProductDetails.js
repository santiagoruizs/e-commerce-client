import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct, addCartItem } from '../../api/api';
import './ProductDetails.css'

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)
    const {productId} = useParams()

    const handleQuantityChange = (operator) => {
        if(operator === '+'){
            setQuantity(prev => prev + 1)
        }else{
            if(quantity > 1){
                setQuantity(prev => prev - 1)
            }
        }
    }
    const handleAddToCart = async () => {
        let id = localStorage.getItem("id")
        if (id) {
            const response = await addCartItem(id, product.id, quantity)
        }
    }
    useEffect( () => {
        const getCurrentProduct = async() => {
            const response = await getProduct(productId)
            console.log(response)
            setProduct(response[0])
        };
        getCurrentProduct();
    },[])
    return (
        <div className='product-detail-container'>
            <div className='product-detail-image'>
                <img src={product.imageurl} alt={product.name}/>
            </div>
            <div className='product-desc-buy'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <div className='product-a2c'>
                    <div className='quantity'>
                        <button onClick={() => handleQuantityChange('-')} disabled={quantity === 1}>-</button>
                        <p className='quantity-text'>{quantity}</p>
                        <button onClick={() => handleQuantityChange('+')} disabled={quantity === product.stock} >+</button>
                    </div>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}
export default ProductDetails;