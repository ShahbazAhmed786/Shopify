import React from 'react'
import './ProductDisplay.css'
import star_icon from '../images/star_icon.png'
import start_dull from '../images/star_dull_icon.png'
import { Shopcontent } from '../Context/Shopcontent'
import { useContext } from 'react'
export const ProductDisplay = (props) => {
    const {product}=props;
    const {addtocart}=useContext(Shopcontent);
  return (
    <div className='product-display'>
        <div className="disply-left">
            <div className="image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            
            <div className="productdispay-image">
                <img className='main-image' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right">
         <h1>{product.name}</h1>
         <div className='display-star'>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon}  alt=""/>
            <img src={star_icon} alt="" />
            <img src={start_dull}alt="" />
            <p>{122}</p>
         </div>
         <div className='display-price'>
            <div className="display-old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
         </div>
         <div className="display-description">
            A light weight, usually knitted, pillover shirt, close fitting and 
         </div>
         <div className="display-size">
            <h1>Select Size</h1>
            <div className="right-size">
                <div>S</div>
                <div>M</div>
                <div>X</div>
                <div>XL</div>
                <div>XLL</div>

            </div>
            <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
            <p className='display-category'><span>Category</span> Women, T-shirt, Crop Top</p>
            <p className='display-category'><span>Tags</span> Modern, Latest</p>
         </div>
        </div>
    </div>
  )
}
