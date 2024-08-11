import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Skills from './Skills'


  
  export default function Example() {
    const skils=[
        {
          "id": 1,
          "name": "React.js",
          "imageSrc": "https://reactjs.org/logo-og.png",
          "heading": "React.js"
        },
        {
          "id": 2,
          "name": "Tailwind CSS",
          "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-mspyndicMBTk-KdKp96OZiaD2rkYLYzFQ&s",
          "heading": "Tailwind CSS"
        },
        {
            "id": 3,
            "name": "MERN Stack",
            "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7RBIpryE3X3L6eymup-vHnem0vlOinH0KvhKbMHD58GW7kXr9-Sxb8EBR1RiRFvfYRw&usqp=CAU",
            "heading": "MERN Stack"
          },
          {
            "id": 4,
            "name": "Next.js",
            "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAj91W7yB_3oOdcC-LxF0_6Yg5rHATLQ7uQ&s",
            "heading": "Next.js"
          },
          {
            "id": 5,
            "name": "Bootstrap",
            "imageSrc": "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
            "heading": "Bootstrap"
          },
          {
            "id": 6,
            "name": "SQL",
            "imageSrc": "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg",
            "heading": "SQL"
          },
          {
            "id": 7,
            "name": "Power BI",
            "imageSrc": "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png",
            "heading": "Power BI"
          }
      ]
    return (
        <>
        <Navbar/>
       <hr />
        <h2 className=' text-2xl  text-center  p-1 m-2 font-bold'>Skills <span className="text-cyan-500">& Abilities </span> </h2>
<div className="flex justify-center items-center flex-wrap  min-h-screen  p-2  ">
    
      {
        skils.map((data)=>{
            return(
                <>
                <Skills
        imageSrc={data.imageSrc}
        title={data.name}
      /> 
                
                </>
            )
        })
      }
      
    </div>
      {/* <Footer/> */}
      </>
    )
  }