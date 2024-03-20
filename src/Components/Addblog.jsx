import React, { useContext, useEffect, useState } from 'react'
import './addblog.css'
import { ToastContainer } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'




function Addblog() {

  const[formData,setFormData]=useState({
    title:'',
    author:'',
    date:'',
    category:'',
    file:null,
    content:''
  })

  const navigate=useNavigate()

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
    console.log(formData);
  }

const handleFileChange=(e)=>{
    setFormData({...formData,file:e.target.files[0]})
}

const handleSubmit=async(e)=>{
    e.preventDefault()

    try{

        const formDataToSend=new FormData()
        formDataToSend.append('title',formData.title)
        formDataToSend.append('author',formData.author)
        formDataToSend.append('date',formData.date)
        formDataToSend.append('category',formData.category)
        formDataToSend.append('file',formData.file)
        formDataToSend.append('content',formData.content)
    
    await axios.post('http://localhost:5000/blogs/addblog',formDataToSend,{
  headers:{
    'Content-Type':'multipart/form-data'
  }

    })
    toast.success('Blog Uploaded successfully')
    setFormData({
        title:'',
        author:'',
        date:'',
        category:'',
        file:null,
        content:''
    })

    navigate('/blogmenu')
}catch(error){
toast.error('Failed to upload blog')
console.error('Error uploading blog',error);
}
}
  return (
    <div className='blog__addblog section__padding gradient__bg'>
<h1>Upload Your Blog Post</h1>
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

    <div className="blog__addblog-input">
        <label htmlFor="file">Upload Your Image</label>
        <input type="file"
        name='file'
        id='file'
       onChange={handleFileChange}
        
        />

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
   
   
   <button type='submit'>Upload Blog</button>
   
   </div>
</form>

<ToastContainer/>
    </div>
  )
}

export default Addblog

