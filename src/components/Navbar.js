import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import cart_icon from '../images/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontent } from '../Context/Shopcontent'

export const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItem}=useContext(Shopcontent);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPIFY</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to='mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to='women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
          
        </ul>
         <div className="login-button">
           <Link to='login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt="icon" /></Link>
            <div className='cart-count'>{getTotalCartItem()}</div>
            
        </div> 

    </div>
  )
}
