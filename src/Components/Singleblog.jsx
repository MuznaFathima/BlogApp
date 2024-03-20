import React, { useEffect, useState } from 'react'
import './singleblog.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../pages/Footer'
import { FaEdit, FaHeart, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import { HiArrowNarrowLeft } from 'react-icons/hi'



function Singleblog() {


   
    const{id}=useParams()
    console.log(id);
    const[blogPost,setBlogPost]=useState(null)
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [showDeleteWarning, setShowDeleteWarning] = useState(false);

    const navigate=useNavigate()


    const fetchBlogPost=async ()=>{
        try{
            const response=await axios.get(`http://localhost:5000/blog/${id}`)
            setBlogPost(response.data)
        }catch(error){
            console.error('Error fetching blog post',error);
        }
    }

    useEffect(() => {
    fetchBlogPost()
    }, [id])



    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked); // Toggle the state
    }

// to show delete warning
    const handleTrashClick=()=>{
        setShowDeleteWarning(true);
    }

    const handleDelete = async() => {
       

        try{

           const response= await axios.delete(`http://localhost:5000/delete/${id}`);
           console.log(response.data);
            toast.success('Blog deleted',{ autoClose: 2000 })
            navigate('/blogmenu')

        }catch(error){
            console.error('Error deleting blog post:', error);
           toast.warning('Error deleting Blog')
        }
        setShowDeleteWarning(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteWarning(false);
    };




    if(!blogPost){
        return <div>Loading...</div>
    }




    const paragraphs = blogPost.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));




    
  return (
    <>
    <div className='blog__singleblog section__padding '>

        <div className="blog__singleblog-header">
        <p>Date: {new Date(blogPost.date).toDateString()}</p>
        <p>By  {blogPost.author}</p>
        </div>
   
   <div className="blog__singleblog-heading">
   <h1>{blogPost.title}</h1>
   </div>
       
      
     
     <div className='blog__singleblog-image'>
         
          <img src={`http://localhost:5000/${blogPost.imageUrl}`} alt="Blog Post" />
      
          <p>{paragraphs}</p>
     </div>


     <div className="blog__singleblog-signs">
    <FaEdit className="sign-icon"  onClick={() => navigate(`/edit/${id}`)} />
                <FaHeart  className={`sign-icon ${isHeartClicked ? 'heart-clicked' : ''}`}
                    onClick={handleHeartClick} />
                <FaTrash className="sign-icon"  onClick={handleTrashClick}/>

    </div>
  
      
    </div>

    {
        showDeleteWarning&& <div className='delete-warning'>
        <p>Are you sure you want to delete this post?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleCancelDelete}>Cancel</button>
    </div>
    }

<div className='blog__singleblog-back'>
    <Link to='/blogmenu'><button><HiArrowNarrowLeft />Back</button></Link>

</div>
   
    <Footer/>

<ToastContainer/>
    </>
  )
}

export default Singleblog
