

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';


import Navbar from './pages/Navbar'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import Addblog from './Components/Addblog';
import Blogmenu from './Components/Blogmenu';
import Singleblog from './Components/Singleblog';
import Edit from './Components/Edit';
import Category from './Components/Category';
import LandingPage from './pages/LandingPage';




function App() {

 const location=useLocation()
 const isLandingPage = location.pathname === '/';
  return (
   <>
      <div className="App">
  
  
  
      <div className='gradient__bg'>
      {isLandingPage ? null : <Navbar />}
 
  
  </div>
  
      </div>
      <Routes>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/blogmenu' element={<Blogmenu/>}/>
        <Route path='/blog/:id' element={<Singleblog/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/category" element={<Category/>}/>

       
      </Routes>
   </>
  );
}

export default App;
