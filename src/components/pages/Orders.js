import './Orders.css'
import { getOrders } from '../../api/api'
import { useEffect, useState } from "react";
import { format, parseISO } from 'date-fns';
const Orders = () => {
    const [orders, setOrders] = useState([])
    // const orders = [
    //     {
    //       id: 12344,
    //       products: [],
    //       total: 1000,
    //       orderDate: 'Oct 10 2023',
    //       deliverDate: 'Oct 11 2023',
    //       status: 'Delivered'
    //     },
    //     {
    //         id: 1124,
    //         products: [],
    //         total: 10000,
    //         orderDate: 'Jan 10 2024',
    //         deliverDate: 'Jan 20 2024',
    //         status: 'Delivered'
    //     },]
    useEffect( () => {
        const getUserOrders = async() => {
            let id = localStorage.getItem("id")
            let response = await getOrders(id)
            setOrders(response)
            console.log(response)
        };
        getUserOrders();
    }, [])
    return(<div className='orders-container'>
        <h1>
            My orders
        </h1>
    <div className='orders-list'>
        {orders.map(o => (
            <div className='order-container'>
            <div className='order-top'>
                <div className='order-status'>
                    <p><strong>Status:</strong> On its Way</p>
                    <p><strong>ON:</strong> {format(parseISO(o.date), 'PP')}</p>
                </div>
                <div className='order-images'>
                    {o.products.map(p => (<img src={p.imageurl} alt={p.name} too/>))}
                </div>
            </div>
            
            <div className='order-bottom'>
                <div className='order-details'>
                    <p><strong>Order Id:</strong> {o.id}</p>
                    <p><strong>Total:</strong>  {o.total_price}</p>
                    <p><strong>Date:</strong>  {format(parseISO(o.date), 'PP')}</p>
                </div>
                <div className='order-buttons'>
                    <button>Buy Again</button>
                    <button>Track Order</button>
                </div>
            </div>
        </div>
        ))}
        
    </div>

</div>)
}

export default Orders;