import React from 'react'
import './Footer.css'
import instagram_icon from '../images/instagram_icon.png'
import printest_icon from '../images/pintester_icon.png'
import whatsapp_icon from '../images/whatsapp_icon.png'
import footer_logo from '../images/logo_big.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPIFY</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="social-icon">
               <a href="www.instagram.com"><img  src={instagram_icon} alt="" /></a> 
            </div>
            <div className="social-icon">
               <a href="www.printest.com"><img src={printest_icon} alt="" /></a> 
            </div>
            <div className="social-icon">
              <a href="www.whatsapp"><img src={whatsapp_icon} alt="" /></a>  
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}
