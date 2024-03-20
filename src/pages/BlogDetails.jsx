import React, { useEffect, useState } from 'react'
import author from '../assets/author.png'
import './blogdetails.css'
import { HiArrowNarrowRight } from "react-icons/hi";
import axios from 'axios';
import { Link } from 'react-router-dom';


function BlogDetails() {

  const[blogPosts,setBlogPosts]=useState([])

  const fetchBlogPosts=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/getblog')
      const shuffledBlogPosts = shuffleArray(response.data);
      const numberOfPostsToShow = 2; 
      setBlogPosts(shuffledBlogPosts.slice(0, numberOfPostsToShow));
    }catch(error){
      console.error('Error fetching blog posts:', error);
    }

  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
   fetchBlogPosts()
  }, [])
  
  const truncateContent=(content)=>{
    // Split the content into lines based on punctuation marks followed by a space
    const lines = content.split(/(?<=[.?!])\s+/);
    
    // If content is less than or equal to 5 lines, return original content
    if (lines.length <= 4) {
      return content;
    }
  
    // Otherwise, join the first 5 lines and add ellipsis
    return lines.slice(0, 4).join("\n") + " ...";
  }
  
  return (
   <>
   {blogPosts.map((post)=>(
    <>
        <div   className='blog__blogdetails section__padding gardient__bg' key={post._id}>
            <div className="blog__blogdetails-image ">
                <img src={author}  alt="author" />
            </div>
            <div className="blog__blogdetails-heading">
            <h1>By {post.author}</h1>
          
           <p>{new Date(post.date).toLocaleDateString()}</p></div>
           <div className="blog__blogdetails-category">
       
            <p>Category</p>
           <p>{post.category}</p>


           </div>

    
        </div>
        <div className="blog__blogdetails-content section__padding">
      <p >{truncateContent(post.content)}</p>
<Link to={`/blog/${post._id}`}><button type='button'> Continue reading <HiArrowNarrowRight /></button></Link>


        </div>

</>
   ))}
        
   </>
  )
}

export default BlogDetails