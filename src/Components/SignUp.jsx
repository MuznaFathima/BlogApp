
import React, { useState } from 'react'
import './signupstyle.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import image from '../assets/image.png'
import Footer from '../pages/Footer';

function SignUp() {

    const navigate=useNavigate()

    const[formData,setFormData]=useState({

        username:"",
        email:"",
        password:""
    })
    

    const setInput=(e)=>{
        const{name,value}=e.target
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))

    }
    console.log(formData);



    const handleSubmit=async(e)=>{

        e.preventDefault()
        const{username,email,password}=formData
        if(!username|| !email ||!password){
            toast.error('fill the form completely')
        }
        try{
             
            const response=await axios.post('http://localhost:5000/signup',formData)
            console.log(response.data);
            toast.success('user registered successfully!!')

        }catch(err){
            console.log(err);
        }


    }


    
    return (
        <div>
   
            <div className='blog__signup section__padding gradient__landingbg'>
                <div className='blog__signup-image'>

                <img
              src={image}
              alt="image"
              
            />
                       
                   </div>

                   <div className="blog__signup-form">
                    <form className='blog__signup-form__content'>


                       
                            <label>Username</label>
                            <input
                            type='text'
                            name='username'
                            value={formData.username}
                            
                          onChange={setInput} 
                          autoComplete='off'>
                          </input>
                    


                       
                            <label >Email</label>
                            <input
                             type='email'
                             name='email'
                             value={formData.email}
                             
                             onChange={setInput}  
                             autoComplete='off' >
                         </input>
                      


           
                         <label >Password</label>
                            <input
                             type='password'
                              name='password' 
                              value={formData.password}
                           
                             onChange={setInput} 
                             autoComplete='off' > 
                             </input>
                            


                    </form>
                    </div>

                    <div className="blog__signup-btn">
                        <button type='submit' onClick={handleSubmit}>Sign Up</button>

                    </div>
                    <div className="blog__signup-signin">
                    <p> Already have an account? <Link to="/signin" className="link">Sign In</Link></p>
                    </div>

             
            </div>
            <ToastContainer/>
            <Footer/>
        </div>
    )
}

export default SignUp