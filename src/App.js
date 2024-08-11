import React from 'react'
import Home from './Components/Navbar'
import Navbar from './Components/HomePage'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Education from './Components/Education'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom'

import Protfulio from './Components/Protfulio'
export default function App() {
  return (
   <>
   
   
   {/* <Navbar/> */}
   <div className=" fixed  right-10 bottom-10 z-30 bg-white">
  
   <Link to='https://wa.me/9571360027'>
   
   <FaSquareWhatsapp className='text-green-600 text-5xl cursor-pointer ' />
   </Link>
   </div>
   
   <Routes> 
   <Route path='/' Component={HomePage}/>
<Route path='/Contact' Component={Contact}/>
<Route path='/Education' Component={Education}/>
<Route path='/About' Component={About}/>
<Route path='/Service' Component={Service}/>
<Route path='/Protfulio' Component={Protfulio}/>


    </Routes>
  
   {/* <About/>
   <Contact/>
   <Service/>
   <Footer/> */}
   
   
   </>
  )
}
