import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from '../Components/SignUp'
import Login from '../Components/Login'

function Routers() {
  return (
    <div>
        
        <Routes>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<Login/>}/>
        </Routes>
        </div>
  )
}

export default Routers