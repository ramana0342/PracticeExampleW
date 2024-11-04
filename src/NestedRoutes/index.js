import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Index() {
     
  return (
    <>
     <section id="mainNavBarSection">
    <div className='mainNavBar'>
      <NavLink className="navLinks" to="/SighUp" ><b>Home</b></NavLink>
      <NavLink className="navLinks" to="/login"><b>Login</b></NavLink>
    </div>
   </section>
   <Outlet/>
    </>
  )
}

export default Index