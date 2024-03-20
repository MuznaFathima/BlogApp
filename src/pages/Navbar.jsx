import React, { useState } from "react";
import logo from "../assets/blogger.png";
import "./navbar.css";
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const navigation=useNavigate()
    const navigate=()=>{
        navigation('/signup')
    }

  
  const Menu = () => (
    <><p>
        <a href="/home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="/blogmenu">Blog</a></p>
      <p><a href="/Category">Category</a></p>
      
    </>
  );
  const[toggleMenu,setToggleMenu]=useState(false)
  return (
    <div className="blog__navbar">
      <div className="blog__navbar-links">
        <div className="blog__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="blog__navbar-links_container">
          <Menu />
        </div>

      </div>

      <div className="blog__navbar-sign">
      <Link to='/signin'>  <p>Sign in</p></Link>
        <Link to='/signup'><button type="button">Sign Up</button></Link>
      </div>
      <div className="blog__navbar-menu">
{toggleMenu?<RiCloseLine color="#0f277b" size={27} onClick={()=>setToggleMenu(false)}/>:<RiMenu3Line color="#0f277b" size={27} onClick={()=>setToggleMenu(true)}/>}
{
    toggleMenu&&(
        <div className="blog__navbar-menu_container scale-up-center">
            <div className="blog__navbar-menu_container-links">
                <Menu/>
                <div className="blog__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button" onClick={navigate}>Sign Up</button>
            </div>
            </div>
           
        </div>
    )

}
      </div>
    </div>
  );
}

export default Navbar;
