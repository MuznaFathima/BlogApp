import React, { useEffect, useState } from "react";
import "./blogmenu.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

function Blogmenu() {



const[blogPosts,setBlogPosts]=useState([])
const fetchBlogPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/getblog");
    setBlogPosts(response.data.reverse()); 
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};

useEffect(() => {
 fetchBlogPosts()
}, [])

const truncateContent=(content)=>{
  // Split the content into lines based on punctuation marks followed by a space
  const lines = content.split(/(?<=[.?!])\s+/);
  
  // If content is less than or equal to 5 lines, return original content
  if (lines.length <= 1) {
    return content;
  }

  // Otherwise, join the first 5 lines and add ellipsis
  return lines.slice(0, 1).join("\n") + " ...";
}
    
  return (
    <>
    <div className="blog__menu section__padding gradient__bg">
      <div className="blog__menu-heading">
        <h1>EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</h1>
        <h1>Train of Thought</h1>
      </div>
<div className="blog__menu-content">

{blogPosts.map((post) => (
          <Link to={`/blog/${post._id}`}  className="blog__menu-content-card" key={post._id} >
          <div className="blog__menu-content-image">
              
              <img src={`http://localhost:5000/${post.imageUrl}`} alt="Blog Post" />
              
            
          </div>
          <h2>{post.title}</h2>
            <p>{truncateContent(post.content)}</p>

          </Link>
        ))}
</div>

         



     

    </div>
    <Footer/>
    </>
  );
}

export default Blogmenu;
