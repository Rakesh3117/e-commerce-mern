import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import axios from 'axios';

const App = () => {
    const [productsList, setProductsList] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/");
                setProductsList(res.data); 
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const AddToCart = (product) => {
        console.log(product);
        setCartItems((prevItems) => {
            const isProductInCart = prevItems.some(item => item.id === product.id);
            if (!isProductInCart) {
                return [...prevItems, { ...product, quantity: 1 }];
            }
            return prevItems;
        });
    };

    const RemoveItem = (eachItem) => {
        console.log(eachItem);
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== eachItem.id));
    };

    const UpdateCartItem = (id, newQuantity) => {
      setCartItems((prevItems) => {
          return prevItems.map(item => 
              item.id === id ? { ...item, quantity: newQuantity } : item
          );
      });
  };
  

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route 
                        path="/home" 
                        element={<Home productsList={productsList} AddToCart={AddToCart} cartItems={cartItems} RemoveItem={RemoveItem} />} 
                    />
                    <Route path="/cart" element={<Cart cartItems={cartItems} RemoveItem={RemoveItem} UpdateCartItem={UpdateCartItem} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
