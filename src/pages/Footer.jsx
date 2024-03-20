import React from 'react'
import './footer.css'

import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblrSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='blog__footer section__padding '>

      <div className="blog__footer-icons">
      <FaXTwitter  size={30}/>
      <FaInstagram size={30}/>
      <SlSocialFacebook size={30} />
      <FaTumblrSquare size={30}/>
      
      </div>
      <div className="blog__footer-contact">
      New York, NY 10012, US
      </div>
      <div className="blog__footer-copyright">
      <p>&copy; 2024 Blog. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer