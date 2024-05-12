import './ContentFilter.css'
// import { useState } from 'react';
const ContentFilter = (props) =>{
    const handleFilterChange = (event) => {
        props.setFilter(event.target.value);
    };
    const handleOrderChange = (event) => {
        props.setOrder(event.target.value);
    };
    return(

        <div className= {`filter-panel${props.isOpen ? "" : "-hide"}`}>
            <div className="filter-header">
                <h3>Filter Panel</h3>
                {/* <button id="closeBtn" onClick={props.togglePanel}>Close</button> */}
            </div>
            <div className="filter-content">
                <h4>Filter by:</h4>
                <ul className="filter-list">
                    <li><input type="radio" id="filter0" name="category" value="All" checked={props.filter === 'All'}  onChange={handleFilterChange} /><label htmlFor="filter0">All</label></li>
                    <li><input type="radio" id="filter1" name="category" value="Computers" checked={props.filter === 'Computers'} onChange={handleFilterChange}/><label htmlFor="filter1">Computers</label></li>
                    <li><input type="radio" id="filter2" name="category" value="Accesories" checked={props.filter === 'Accesories'} onChange={handleFilterChange}/><label htmlFor="filter2">Accesories</label></li>
                    <li><input type="radio" id="filter3" name="category" value="Lifestyle" checked={props.filter === 'Lifestyle'} onChange={handleFilterChange}/><label htmlFor="filter3">Lifestyle</label></li>
                </ul>
                <h4>Order by:</h4>
                <ul className="order-list">
                    <li><input type="radio" id="order1" name="order" value="Price" checked={props.order === 'Price'} onChange={handleOrderChange}/><label htmlFor="order1">Price</label></li>
                    <li><input type="radio" id="order2" name="order" value="Stock" checked={props.order === 'Stock'} onChange={handleOrderChange}/><label htmlFor="order2">Stock</label></li>
                </ul>
            </div>
        </div>

    )
}
export default ContentFilter;