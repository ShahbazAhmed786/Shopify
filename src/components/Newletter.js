import React from 'react'
import  './Newletter.css'
export const Newletter = () => {
  return (
    <div className='Newletter'>
        <h1> Get Exclusive offers at your Email </h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
          <input type="email" placeholder='Your Email id' />
          <button>Subscribe</button>
        </div>
    </div>
  )
}
