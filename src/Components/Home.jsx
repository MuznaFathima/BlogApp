import React from 'react'
import Header from '../pages/Header'
import Latest from '../pages/Latest'
import BlogDetails from '../pages/BlogDetails'
import Newsletter from '../pages/Newsletter'
import Footer from '../pages/Footer'







function Home() {
 
  return (
   <>
  
      <div>
  
        <Header/>
        <Latest/>
        <BlogDetails/>
        <Newsletter/>
        <Footer/>
  
         
  
  
      </div>
   </>
  )
}

export default Home