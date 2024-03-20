import axios from "axios";
import React, { useEffect, useState } from "react";
import './category.css'
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
axios;
function Category() {
  const [category, setCategory] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const fetchBlogPost = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getblog");
      setBlogs(response.data.reverse());
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const fetchByCategory = async () => {
    if (category) {
      const filtered = blogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
  };

  const handleCellClick=(e)=> {
    const clickedCategory = e.target.textContent;
    setCategory(clickedCategory);
  };

  useEffect(() => {
    fetchBlogPost();
  }, []);

  useEffect(() => {
    fetchByCategory();
  }, [category, blogs]);

  return (
    <>
    <div children='blog__category-total'>
      <div className="blog__category-heading section__padding">
            <h1>FIND YOUR TASTE</h1>
        </div>
    <div className="blog__category section__padding gradient__bg">


    <div className="blog__categoty-category">

       
            
<button onClick={handleCellClick}>Technology</button>
<button onClick={handleCellClick}>Lifestyle</button>
<button onClick={handleCellClick}>Travel</button>
<button onClick={handleCellClick}>Food</button>
<button onClick={handleCellClick}>Culture</button>
<button onClick={handleCellClick}>Health</button>
<button onClick={handleCellClick}>Celebrity</button>
<button onClick={handleCellClick}>Entertainment</button>
<button onClick={handleCellClick}>Sports</button>
<button onClick={handleCellClick}>Other</button>




</div>
      
      
      <div className="blog__category-content">
      { filteredBlogs.map((post)=>(
       
       
       
       <Link className="blog__category-content__card"  key={post._id} to={`/blog/${post._id}`} >
      <img src={`http://localhost:5000/${post.imageUrl}`} alt="yoga" />

     <div className="blog__category-content__title">
          <h1>{post.title}</h1>
          <h2>    By {post.author}</h2>
     </div>
     


       


      


      
 
            </Link>
            
           ))}



       
      </div>
    
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default Category;
