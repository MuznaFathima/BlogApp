import React, { useState } from 'react'
import './Newsletter.css'
import { ToastContainer, toast } from 'react-toastify'
toast
function Newsletter() {


  const[email,setEmail]=useState('')
  const handleChange=(e)=>{
setEmail(e.target.value)
  }


const handleSubscribe=()=>{
  if(validateEmail(email)){
    toast.success('You are subscribed!');
  }else{
    toast.error('Invalid email address!');
  }
}
  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='blog__newsletter section__padding'>
        <div className="blog__newsletter-content">
  <p>NEWSLETTER</p>
  <h1>Subscribe to our website newsletter 
  to receive news and updates.</h1>
  <p>Get special offers directly to your email every week!</p>
        </div>
        <div className="blog__newsletter-input">
            <input type="email" placeholder='    Your Email'  value={email} onChange={handleChange}/>
            <button onClick={handleSubscribe}>Subscribe</button>

        </div>
        <ToastContainer/>
    </div>
  )
}

export default Newsletter