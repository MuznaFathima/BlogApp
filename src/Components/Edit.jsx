import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './addblog.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Edit() {


    const navigate=useNavigate()
    const{id}=useParams()
    console.log(id);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        category: '',
 
        content: ''
      });

     

      const fetchBlogPost = async () => {
        try {
          const response= await axios.get(`http://localhost:5000/blog/${id}`);
         console.log(response.data);
         setFormData(response.data)
   
        } catch (error) {
          console.error('Error fetching blog post:', error);
        }
      };

      useEffect(() => {
       fetchBlogPost()
      }, [id])

      const handleChange = (e) => {
        const { name, value } = e.target;
       
    setFormData({ ...formData, [name]:value});
        
        console.log(formData);
      };

     
      
      const handleSubmit = async (e) => {


        e.preventDefault();
        const{title,author,date,category,content}=formData

        if(!title || !author ||!date ||!category ||!content){
            toast.warning('please fill the form completely')
        }
    
        else{
        try {
          await axios.put(`http://localhost:5000/update/${id}`, formData);
       
          console.log('Blog post updated successfully');
          navigate('/blogmenu')

        } catch (error) {
      
          console.error('Error updating blog post:', error);
        }
    }
      };
  return (
    <div>
 <div className='blog__addblog section__padding gradient__bg'>
<h1>Edit  Blog </h1>
<form onSubmit={handleSubmit}>

    <div className="blog__addblog-input">
        <label htmlFor="title">Blog Title</label>
        <input
         type="text"
         value={formData.title}
         name='title'
         id='title'
        onChange={handleChange}
          
          />
    </div>
    <div className="blog__addblog-input">
<label htmlFor="author">Author Name</label>
<input type="text"
value={formData.author}
name='author'
id='author'
onChange={handleChange}

/>
    </div>
  
    <div className="blog__addblog-input">
        <label htmlFor="date">Date</label>
        <input type="date"
       value={formData.date}
        name='date'
        id='date'
onChange={handleChange}
        />

    </div>
    <div className="blog__addblog-input">
<label htmlFor="category">
    Category
</label>
<select   name='category' id='category' value={formData.category} onChange={handleChange}>
<option >Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Culture">Culture</option>
            <option value="Health">Health</option>
            <option value="Celebrity">Celebrity</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          
</select>
    </div>
  
 

    <div className="blog__addblog-input" >
        <label htmlFor="content">Content</label>
        <textarea 
        type="text" 
         rows='10'
        value={formData.content}
         name='content'
         id='content'
       onChange={handleChange}
       />
    </div>
   <div className='blog__addblog-btn'> 
   
  <Link to='/blogmenu'> <button type='submit'>Cancel</button></Link>
   <button type='submit'>Save Changes</button>
   
   
   </div>
</form>


    </div>
        <ToastContainer/>
    </div>
  )
}

export default Edit