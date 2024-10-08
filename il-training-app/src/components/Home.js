import React from 'react';
import Navbar from './Navbar';
import ProductsCard from './ProductsCard';
import '../styling/Home.css';

const Home = ({ productsList, AddToCart, cartItems, RemoveItem }) => {
    return (
        <div>
            <Navbar cartItems={cartItems} />
            <div>
                <h1 className='home-heading'>Products : {productsList.length}</h1>
            </div>
            <div className='main-container'>
                {productsList.map((product) => (
                    <div key={product.id}> 
                        <ProductsCard 
                            product={product} 
                            AddToCart={AddToCart} 
                            cartItems={cartItems} 
                            RemoveItem={RemoveItem} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
