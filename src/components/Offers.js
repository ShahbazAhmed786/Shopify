import React from 'react'
import './Offers.css'
import Exclusive_image from '../images/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT </p>
            <br />
            <button>Check Now</button>
        </div>
        <div className="offers_right">
            <img src={Exclusive_image} alt="" />
        </div>
    </div>
  )
}
