import React, { useContext } from 'react'
import './Cartitem.css'
import { Shopcontent } from '../Context/Shopcontent'
import remove_icon from'../images/cart_cross_icon.png'
export const Cartitem = () => {
    const {getTotalCartAmount,all_product,cartItems,removetocart}=useContext(Shopcontent);
    const use=()=>{
        return alert("Checkout Successfully")
    }
  return (
   <>
    <div className='cartitem'>
        <div className="cart-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e)=>{
          
         if(cartItems[e.id]>0)
         {
             return<div>
             <div className="cart-format cart-main">
                 <img src={e.image} alt="" className='product-icon' />
                 <p>{e.name}</p>
                 <p>{e.new_price}</p>
                 <button className='cart-quantity'>{cartItems[e.id]}</button>
                 <p>${e.new_price*cartItems[e.id]}</p>
                 <img className='remove-icon' src={remove_icon} onClick={()=>{removetocart(e.id)}} alt="" />
             </div>
             <hr />
             
         </div>
 
         }
         return null;
        })}
        <div className="cart-down">
            <div className="cart-total">
                <h1>Cart Totals</h1>
           
            <div>
            <div className="cart-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className="cart-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cart-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button onClick={()=>{use()}}>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-promocode'>
                 <p>If you have a promo code, Enter it here </p>
                 <div className="cart-promobox">
                    <input type="text" placeholder='promo code'  />
                    <button>Submit</button>
                 
            </div>
            </div>
        </div>
    </div>
    </>
  )
  
}
