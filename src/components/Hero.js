import React from 'react'
import './Hero.css'
import hand_icon from '../images/hand_icon.png'
import arrow_icon from '../images/arrow.png'
import hero_image from '../images/hero_image.png'
 export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>

      <div className="hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
      </div>
      <p>collections</p>
      <p>for everyone</p>
      </div>
      <div className="hero-latest">
        <button>Latest Collection  <img src={arrow_icon} alt="" /></button>
       
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>

    </div>
  )
}