import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const educationData = [
  {
    id: 1,
    institution: "Chhatrapati Shahu Ji Maharaj University , Kanpur",
    degree: "Bachelor of Computer Application",
    duration: "2021 - 2024",
    description: "Focused on software engineering, algorithms, and data structures."
  },
  {
    id: 2,
    institution: "B.s Memorial Public Sinior Secondary School ,Bhiwadi",
    degree: "Intermediate ",
    duration: "2020 - 2021",
    description: "Majored in PCM."
  },
  {
    id: 3,
    institution: "B.s Memorial Public Sinior Secondary School ,Bhiwadi",
    degree: "High School ",
    duration: "2018 - 2019",
    description: "Majored in science and mathematics."
  }
];

const EducationCard = ({ education }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4 p-6">
      <h2 className="font-bold text-xl mb-2">{education.institution}</h2>
      <p className="text-gray-700 text-base mb-2">{education.degree}</p>
      <p className="text-gray-600 text-sm mb-4">{education.duration}</p>
      <p className="text-gray-700 text-base">{education.description}</p>
    </div>
  );
};

const EducationPage = () => {
  return (
    <>
    <Navbar/>
    <div className="hidden md:block flex flex-col items-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-6">Edu<span className='
      text-cyan-500'>cation</span></h1>
      <div className=" flex ">
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
      </div>
    </div>
    {/* mobile view  */}
    <div className=" block flex flex-col items-center min-h-screen bg-gray-100 p-4 md:hidden">
      <h1 className="text-3xl font-bold mb-6">Edu<span className='
      text-cyan-500'>cation</span></h1>
      <div className=" flex flex-col ">
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
      </div>
    </div>
{/* <Footer/> */}
</>
  );
};

export default EducationPage;
