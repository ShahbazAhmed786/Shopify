import React, { useContext } from 'react'
import './ShopCategory.css'
import {Item} from '../components/Item'
import dropDown_icon from '../images/dropdown_icon.png'
import { Shopcontent } from '../Context/Shopcontent'
export const ShopCategory = (props) => {
  const{all_product}=useContext(Shopcontent);
  return (
    <div className='Shop-category'>
       <div className='shopcategory-banner'><img src={props.banner} alt="" /></div>
       <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
        sort by <img src={dropDown_icon} alt=''/>
       </div>
       </div>
       <div className="shopcategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
       </div>
       <div className="showcategory-loadmore">
        Explore more
       </div>
    </div>
  )
}
