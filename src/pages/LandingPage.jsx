import React from 'react'
import { Link } from 'react-router-dom'
import './Landingpage.css'
import logo from '../assets/bloglogo.png'
Link

function LandingPage() {
  return (
    <>
    
    <div className='blog__landing section__padding gradient__landingbg landing-page' id="home">
        <div className="blog__landing-content__heading">
            <img src={logo} alt="logo" />
           
           <h1 > Join us in discovering stories, and inspirations</h1>
           </div>
            <div className="blog__landing-content__subheading">
         
            
            <h1 >Blog Beautifully, Edit easily</h1>
            <h1 >Get started</h1>
            </div>
           
            <div className="blog__landing-content__buttons">
           <Link to='/signin'> <button>SignIn</button></Link>
           <Link to='/signup'> <button>SignUp</button></Link>
       
            
        </div>
       
    </div>
    </>
  )
}

export default LandingPage