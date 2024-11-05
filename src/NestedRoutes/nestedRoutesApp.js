import React from 'react' 
import { BrowserRouter , Routes,Route, NavLink } from 'react-router-dom'
import Home from './home'
import Login from './login'
import "./index.css";
import AfterLogin from './afterLogin';
import Ecommerce from './e-commerce';
import Food from './food';
import  Index from "./index"

function NestedRoutesApp() {
  return (
   <>
   <BrowserRouter>
  
   <Routes>
    <Route path='/' element={<Index/>}>
    <Route index element={<Home />} />
    <Route path="SighUp" element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    </Route>
    <Route path="/afterLogin" element={<AfterLogin/>}>
             <Route path= "ECommerce" element={<Ecommerce/>}/>
             <Route path= "food"  element={<Food/>}/>
    
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default NestedRoutesApp