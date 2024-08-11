import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pr from '../Image/pr.png'
export default function Protfulio() {
  return (
    <>
    <Navbar/>
    <h1 className=" text-xl  text-black  p-4   font-bold tracking-tight text-black sm:text-3xl  w-full text-center ">LATEST  <span className="text-cyan-500">PROJECTS</span></h1>
      <div className=" hidden md:block  p-5">
        <div className="p-5  flex justify-center space-x-10 w-full  ">
      
         

<div class="w-1/3 hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white  border-gray-200 rounded-lg shadow  ">
    <img src={pr} alt="" className=" " />
    <a href="#">
        <h5 class="mb-2  text-2xl font-bold tracking-tight text-gray-400">Vizchem.co.in</h5>
    </a>
  
    <a href="https://vizchem.co.in/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none   ">
       Website Link
        
    </a>
</div>

<div class="w-1/3  hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    <img src="https://eviet.edu.vn/uploads/thi-tren-he-thong-dao-tao-truc-tuyen-e-learning-3(1).jpg" alt="" className="" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 ">e learning_Adda </h5>
    </a>
    
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500  rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none ">
    Website Link
       
    </a>
</div>

<div class="w-1/3  hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="" className="w-full" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400  mt-4">Full Stack Developent(Mern)</h5>
    </a>
  
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500  rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none ">
    Website Link
        
    </a>
</div>
  
          
        </div>
      </div>
      {/* mobile view  */}
      
      <div className=" p-5 md:hidden">
        <div className="p-5  flex flex-col justify-center gap-5 w-full  ">
      
         

<div class="w-full hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white  border-gray-200 rounded-lg shadow  ">
    <img src={pr}alt="" className=" " />
    <a href="#">
        <h5 class="mb-2  text-2xl font-bold tracking-tight text-gray-400">Vizchem.in</h5>
    </a>
   
    <a href="https://vizchem.in/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none   ">
       Website Link
        
    </a>
</div>

<div class="w-full  hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    <img src="https://eviet.edu.vn/uploads/thi-tren-he-thong-dao-tao-truc-tuyen-e-learning-3(1).jpg" alt="" className="" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 ">e learning_Adda </h5>
    </a>
   
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500  rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none ">
    Website Link
        
    </a>
</div>

<div class="w-full  hover:-translate-y-3 duration-500 cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="" className="w-full" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400  mt-4">Full Stack Developent(Mern)</h5>
    </a>
   
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500  rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none ">
    Website Link
        
    </a>
</div>
  
          
        </div>
      </div>

    {/* <Footer/> */}
      
    </>
  )
}
