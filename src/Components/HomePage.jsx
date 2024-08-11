'use client'



import kareemPic from '../Image/kareemPic.png'
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Navbar from './Navbar'
import Footer from './Footer';
import bg2 from '../Image/bg2.png'
import videoFile from '../Image/here.mp4'
import resume from '../Image/resume.pdf'
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  

  return (
    <>
    <Toaster/>
   <Navbar/>
   
   <div className="relative  h-svh overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" hidden md:block relative flex flex-col mt-20 gap-5 items-center  z-10">
      <h2 className=' text-3xl font-bold'>Hello it's me</h2>
<h1 className=' text-5xl font-bold'>Mohammad Kareem</h1>

<h1 className='text-6xl font-bold ml-10'>

<ReactTyped className='text-cyan-500'
               strings={[
                "Backend Developer",
                "Mern Stack Developer",
                "Fronted Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input type="text" className='bg-transparent  text-cyan-500' />
                </ReactTyped>
</h1>
<div className=" w-full flex justify-center gap-5 mt-4 ">
  <a href="https://www.linkedin.com/in/mohammad-kareem-774271228/">
  <FaLinkedin className='text-3xl'/>
  </a>
<a href="https://github.com/codehis">
<FaGithub className='text-3xl'/>
</a>
<a href="https://wa.me/9571360027">
<FaWhatsappSquare className=' text-3xl'/> </a>

</div>
<div className="w-full text-center  ">
<a href={resume} download class="download-button"><button  className='bg-cyan-400  p-3 font-bold mt-2 rounded'>Dwonload Resume </button></a>
  
</div>


      </div>
     
      
{/* mobile view  */}
<div className=" block relative flex flex-col mt-20 gap-5 items-center  z-10 md:hidden">
      <h2 className=' text-3xl font-bold'>Hello it's me</h2>
<h1 className=' text-4xl font-bold'>Mohammad Kareem</h1>

<h1 className='text-4xl font-bold ml-10'>

<ReactTyped className='text-cyan-500'
               strings={[
                "Backend Developer",
                "Mern Stack Developer",
                "Fronted Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input type="text" className='bg-transparent  text-cyan-500' />
                </ReactTyped>
</h1>
<div className=" w-full flex justify-center gap-5 mt-4 ">
  <a href="https://www.linkedin.com/in/mohammad-kareem-774271228/">
  <FaLinkedin className='text-3xl'/>
  </a>
<a href="https://github.com/codehis">
<FaGithub className='text-3xl'/>
</a>
<a href="https://wa.me/9571360027">
<FaWhatsappSquare className=' text-3xl'/> </a>

</div>
<div className="w-full text-center  ">
<a href={resume} download class="download-button"><button  className='bg-cyan-400  p-3 font-bold mt-2 rounded'>Dwonload Resume </button></a>
  
</div>


      </div>
     
      


    </div>
    
    
   
    {/* <Footer/>  */}
    
        
     
    </>
  )
}
