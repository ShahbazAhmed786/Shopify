import React, { createContext, useState } from 'react'
import all_product from "../images/all_product"
export const Shopcontent=createContext(null);
const getDefaultCart= ()=>{
  let cart={};
  for (let index=0; index<all_product.length+1; index++){
    cart[index]=0;
  }
  return cart;

}
 const ShopcontentProvider = (props) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());
  
  
  const addtocart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }
  const removetocart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartItem=()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        totalItem +=cartItems[item];
      }
    }
    return totalItem;
  }

  const getTotalCartAmount =() =>{
    let totalAmount=0;
    for(const item in cartItems){
      if (cartItems[item]>0)
      {
        let itemInfo = all_product.find((Product)=>Product.new_price===Number(item))
        totalAmount +=itemInfo.new_price *cartItems[item];
      }
      
      return totalAmount;
    }
  }
  

  const contextValue={getTotalCartItem,getTotalCartAmount,all_product,cartItems,addtocart,removetocart};
  return(
    <Shopcontent.Provider value={contextValue}>
{props.children}
    </Shopcontent.Provider>
  )
}
 export default ShopcontentProvider;