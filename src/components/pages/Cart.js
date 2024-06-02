import ShoppingCartTable from '../layout/ShoppingCartTable';
import { getOpenCart, cartCheckout, deleteCartItem } from '../../api/api'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [cartId, setCartId] = useState('')
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate()

    const handleCheckout = async() => {
       let response = await cartCheckout(cartId)
       console.log(response)
       navigate('/orders')

    }
    const handleDeleteItem = async(product_id) => {
        console.log({cartId, product_id})
        let response = await deleteCartItem(cartId, product_id)
        console.log(response)
        setRefresh(!refresh)
        navigate('/cart')
    }
    useEffect( () => {
      const getCartItems = async() => {
          let id = localStorage.getItem("id")
          let response = await getOpenCart(id)
          console.log(response)
          setCartItems(response.items)
          setCartId(response.id)
      };
      getCartItems();
  }, [refresh])
    return(<div className='cart-container'>
        
            <div className='cart-product-list'>
                <h1>
                    My Shopping Cart
                </h1>
            {cartItems.length > 0 && <ShoppingCartTable cartItems={cartItems} handleCheckout={handleCheckout} handleDeleteItem={handleDeleteItem}/>}
            </div>
        
    </div>)
}

export default Cart;