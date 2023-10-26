import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";





import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Register from "./pages/register/Register";
import Brose from "./pages/browse/Brose";
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
          <Route path="/" element={<Brose />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
