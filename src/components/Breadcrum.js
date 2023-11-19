import React from 'react'
import './Breadcrum.css'
import Arrow_icon from '../images/breadcrum_arrow.png'
export const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
   Home <img src={Arrow_icon} alt=''/>Shop<img src={Arrow_icon} alt=''/>{product.category} <img src={Arrow_icon} alt=''/> {product.name}
    </div>
  )
}
