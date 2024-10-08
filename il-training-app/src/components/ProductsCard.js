import React from 'react';

import '../styling/ProductsCard.css';

const ProductsCard = ({ product, AddToCart, cartItems, RemoveItem }) => {
    const { title, price, description, image, rating } = product;

    return (
        <div className='main-container'>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={image} alt="product-image" className='product-image' />
                </div>
                <div>
                    <h1 className='product-name'>{title}</h1>
                    {/* <p className='product-desc'>{description}</p> */}
                    <div className='rating-cost-container'>
                        <div>
                            <p className='rating-text'>rating : {rating.rate}/5</p>
                        </div>
                        {/* <div>
                            <h1>${price}</h1>
                        </div> */}
                    </div>
                    <div className='price-button-container'>
                        <div><h1 className='price-text'>${price}</h1></div>
                        {cartItems.some(item => item.id === product.id) ? 
                            <button className='remove-button' onClick={() => RemoveItem(product)}>Remove</button> :
                            <button className='add-button' onClick={() => AddToCart(product)}>Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
