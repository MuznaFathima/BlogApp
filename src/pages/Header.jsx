import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='blog__header section__padding gradient__bg' id="home">
        <div className="blog__header-content__heading">
            <h1>Share via writing blogs,</h1>
           <h1>and inspire others</h1>
           </div>
            <div className="blog__header-content__subheading">
            <h1>Increase your knowledge by reading new things and I will share</h1>
            <h1>whatever I know for you, as long as I enjoy it</h1>
            
            </div>
           
            <div className="blog__header-content__buttons">
           <Link to='/blogmenu'> <button>Read Blog</button></Link>
           <Link to='/addblog'> <button>Create Blog</button></Link>
       
            
        </div>
       
    </div>

  )
}

export default Header