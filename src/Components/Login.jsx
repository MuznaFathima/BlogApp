import React, { useState } from "react";
import "./Loginstyles.css";

import image from '../assets/image.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";
function Login() {

const navigate=useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("fill form completely!");
    }

  try{
    const response=await axios.post('http://localhost:5000/signin',formData)
    console.log(response.data);
    

    navigate('/home')
   
   

  }catch(err){
    console.log(err);
    toast.warning('Login Unsuccessful')
  }


  };
  return (
<>
      <div className="blog__login section__padding gradient__landingbg">
        <div className="blog__login-image">
          
            <img
              src={image}
              alt="image"
              
            />
          </div>

          <div className="blog__login-form">
          <form className="blog__login-form__content" >
          
              <label >Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={setInput}
                autoComplete="off"
             
              ></input>
           
            
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                name="password"
                onChange={setInput}
                autoComplete="off"
              
               
              ></input>
         

           
            
          </form>
          </div>
          <div className="blog__login-btn">
          <button onClick={handleSubmit}>Sign In</button>
           
          </div>
          <div className="blog__login-signup"><p> Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
         
          </div>
        </div>
      
      <ToastContainer/>
      <Footer/>
    </>
  );
}

export default Login;
