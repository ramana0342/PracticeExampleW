import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AfterLogin() {
  return (<>
  <section id="AfterLoginNavBarSection">
        <div className='AfterLoginNavBar'>
            <NavLink  className="navLinks" to="/"><b>Home</b></NavLink>
             <NavLink  className="navLinks" to= "/afterLogin/ECommerce"><b>E-Commerce</b></NavLink>
             <NavLink  className="navLinks" to="/afterLogin/food"><b>Food</b></NavLink>
        </div>
  </section>
  <Outlet/>
  </>
  )
}

export default AfterLogin