import React from 'react'
import './Related-product.css'
import data_product from '../images/data'
import  {Item } from './Item'
export const RelatedProduct = () => {
  return (
    <div className='realted-product'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>

    </div> 
  )
}
