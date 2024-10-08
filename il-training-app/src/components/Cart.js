import React from 'react'
import Navbar from './Navbar'
import CartItem from './CartItem'
import '../styling/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartItems , RemoveItem , UpdateCartItem}) => {
    const navigate = useNavigate()
    const handleBrowseProducts = () => {
        navigate("/home")
    }
  return (
    <div className='carti-main-container'>
      <div>
        <div>
            <Navbar cartItems={cartItems}/>
        </div>
        {cartItems.length>0 ? 
            <div>
                <div className='quantity-price-container'>
                    <div>
                        <h1>Total Items = {cartItems.length}</h1>
                    </div>
                    <div>
                        <button className='price-button'>
                            Total Price  = ${cartItems.reduce((amount, item) => amount + (item.price * item.quantity), 0).toFixed(2)}
                        </button>
                    </div>
                </div>
                <div>
                    {cartItems.map((eachItem,index)=>(
                        <div key={index}>
                            <CartItem eachItem={eachItem} RemoveItem={RemoveItem} UpdateCartItem={UpdateCartItem}  />
                        </div>
                    ))}
                </div>
            </div>:
            <div className='cart-list-empty'>
                <h1>No Items in the Cart</h1>
                <button className='browse-products' onClick={handleBrowseProducts}>Browser Products</button>
            </div>
        }
        
      </div>
    </div>
  )
}

export default Cart
