import React from 'react';
import './ShoppingCartTable.css'; // Assuming you have some CSS styles defined here

const ShoppingCartTable = ({ cartItems, handleCheckout, handleDeleteItem }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0).toFixed(2);
  return (  <div className="shopping-cart-container">
    <table className="shopping-cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Final Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.product_id}>
            <td className='sp-product'>
              <img src={item.imageurl} alt={item.name} className="product-image" />
              <p>{item.name}</p>
            </td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
            <td>${(item.total_price)}</td>
            <td> <button className="remove-button" onClick={() => handleDeleteItem(item.product_id)}>-</button></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
          <tr>
            <td colSpan="3" className="total-label">Total Price</td>
            <td colSpan="4">${totalPrice}</td>
          </tr>
          
        </tfoot>
      </table>
      <button className="order-now-button" onClick={handleCheckout}>Order Now</button>
      </div>
  );
};

export default ShoppingCartTable;
