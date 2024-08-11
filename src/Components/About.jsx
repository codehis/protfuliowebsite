
  import React from "react"
import kareemPic from '../Image/kareemPic.png'
import Navbar from './Navbar'
import Footer from './Footer'
import resume from '../Image/resume.pdf'

  export default function About() {
    return (
        <>
        
<Navbar/>

<div className="hidden  md:block   w-full md:flex justify-center items-center  h-full items-center" >
      
      <div className=" w-1/2 h-1/2 flex justify-center   ">
        <img src={kareemPic} alt=""  className='   w-1/2  m-10 rounded cursor-pointer hover:scale-90 duration-500 '/>
      </div>
      <div className=" w-1/2 flex flex-col gap-3 justify-center  font-mono h-1/2 ">
<h2 className=' text-2xl font-bold'>About <span className="text-cyan-500">Me</span> </h2>
<h1 className=' text-3xl font-bold text-justify' > Full Stack Developer !</h1>
<p>I have graduated with a Bachelor of Computer Application from Chhatrapati Shahu Ji Maharaj University, Kanpur. As a passionate and skilled MERN stack developer, I have honed my expertise in creating dynamic and responsive web applications. Working as a freelancer, I have successfully completed several projects, demonstrating my proficiency with tools such as Next.js and Tailwind CSS. My portfolio showcases a range of work, including a notable website built for VizChem company. I am always eager to take on new challenges and deliver high-quality solutions.</p>

<h1> <span className="text-cyan-500 font-semibold">Email : </span>kareemmohammad029@gmail.com</h1>

<h1><span className="text-cyan-500 font-semibold" >Place : </span> Bhiwadi, India - 301019</h1>




<div className="w-full text-center  ">
<a href={resume} download class="download-button"><button  className='bg-cyan-400  p-3 font-bold mt-2 rounded'>Dwonload Resume </button></a>
  
</div>


      </div>

      

    </div>

    {/* mobile view  */}

    <div className="w-full flex flex-col justify-center h-full items-center md:hidden" >
      
    <div className=" w-1/2 h-1/2 flex justify-center   ">
        <img src={kareemPic} alt=""  className='   w-1/2  m-10 rounded cursor-pointer hover:scale-90 duration-500 '/>
      </div>
      <div className=" mt-4 w-full flex flex-col gap-3 justify-center items-center   font-mono h-1/2 ">
<h2 className=' text-2xl font-bold'>About <span className="text-cyan-500">Me</span> </h2>
<h1 className=' text-3xl font-bold text-justify ' > Full Stack Developer !</h1>
<p className="p-5 text-justify">I have graduated with a Bachelor of Computer Application from Chhatrapati Shahu Ji Maharaj University, Kanpur. As a passionate and skilled MERN stack developer, I have honed my expertise in creating dynamic and responsive web applications. Working as a freelancer, I have successfully completed several projects, demonstrating my proficiency with tools such as Next.js and Tailwind CSS. My portfolio showcases a range of work, including a notable website built for VizChem company. I am always eager to take on new challenges and deliver high-quality solutions.</p>
<h1> <span className="text-cyan-500 font-semibold">Email : </span>kareemmohammad029@gmail.com</h1>

<h1><span className="text-cyan-500 font-semibold" >Place : </span> Bhiwadi, India - 301019</h1>


<div className="w-full text-center  ">
<a href={resume} download class="download-button"><button  className='bg-cyan-400  p-3 font-bold mt-2 rounded'>Dwonload Resume </button></a>
  
</div>

      </div>

      

    </div>

    

{/* <Footer/> */}

        
     
        
      </>
    )
  }
  