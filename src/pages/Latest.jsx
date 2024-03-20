import React, { useEffect, useState } from "react";
import logo from "../assets/roundlogo.png";

import "./latest.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Latest() {

  const[blogPosts,setBlogPosts]=useState([])
  const fetchBlogPosts=async()=>{

try{

  const response=await axios.get('http://localhost:5000/getblog')
  const latestBlogPosts=response.data.reverse()
  const numberOfPostsToShow = 4;
  setBlogPosts(latestBlogPosts.slice(0, numberOfPostsToShow));
}catch(error){
  console.error('Error fetching blog posts:', error);
}
  }


  useEffect(() => {
    fetchBlogPosts()
  }, [])
  
  return (


  <>
 
     <>
        <div className="blog__latest section__padding">
          <div className="blog__latest-image">
            {" "}
            <img src={logo} alt="logo" />
          </div>
          <div className="blog__latest-heading">
            <h1>Latest Blogs</h1>
          
           <h1>Get Started on latest blogs</h1></div>
            
          
          <div className="blog__latest-btn">
           <Link to='/blogmenu'> <p>See all Blogs</p></Link>
            </div>
    
         
        </div>


        <div className="blog__latest-container section__padding">
       { blogPosts.map((post)=>(
       
       
       
        <Link className="blog__latest-container__column"  key={post._id} to={`/blog/${post._id}`} >
       <img src={`http://localhost:5000/${post.imageUrl}`} alt="yoga" />
       <h1>{post.title}</h1>
       <p>    By {post.author}</p>
      


        


       


       
  
             </Link>
             
            ))}
  </div>
             </>

  </>

  );
}

export default Latest;
