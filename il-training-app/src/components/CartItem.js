import React, { useState } from 'react';
import '../styling/CartItem.css';

const CartItem = ({ eachItem, RemoveItem, UpdateCartItem }) => {
    const { title, price, description, image, rating, quantity } = eachItem;
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const handleIncrement = () => {
        setItemQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            UpdateCartItem(eachItem.id, newQuantity);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (itemQuantity > 1) {
            setItemQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                UpdateCartItem(eachItem.id, newQuantity);
                return newQuantity;
            });
        }
    };

    const totalPrice = (price * itemQuantity).toFixed(2);

    return (
        <div className='cart-item-main-container'>
            <div className='cart-item-sub-container'>
                <div className='cart-item-image-container'>
                    <img src={image} alt="product" className='product-image' />
                </div>
                <div className='cart-item-details-container'>
                    <div><h1 className='cart-item-product-name'>{title}</h1></div>
                    <div><p className='cart-item-product-desc'>{description}</p></div>
                    <div><p className='cart-item-product-rating'>Rating: {rating.rate}/5</p></div>
                </div>
                <div className='cart-item-price-name-container'>
                    <div className='cart-item-price-container'><h1>${totalPrice}</h1></div>
                    <div className='quantity-button-container'>
                        <div className='decrement-button' onClick={handleDecrement}>-</div>
                        <div><p>{itemQuantity}</p></div>
                        <div className='increment-button' onClick={handleIncrement}>+</div>
                    </div>
                    <div className='remove-button-container'>
                        <button className='remove-button' onClick={() => RemoveItem(eachItem)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
