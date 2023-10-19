import { useState } from 'react'
import './App.css'
import Register from './pages/register/Register'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './pages/category/Category';
/*
  ? How many pages are there in app 

  ^ register page 
  ^ category page 
  ^ Profile Page [having some extra components]
  ^ Entertainment page [it have movies category wise]

  ! 4 pages 
*/


// TODO1:[] creating the registration page.



function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/category' element={<Category/>} />
        </Routes>
        
      </BrowserRouter>
      


      <ToastContainer/>
    </>
  )
}

export default App
