import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <>
    <div className=" hidden  md:block w-2/12 m-5  rounded overflow-hidden  shadow-lg bg-white">
      <img
        className="w-full object-cover h-28  "
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
      </div>
    </div>
   {/* mobile view  */}
    <div className=" block w-1/3 m-5  rounded overflow-hidden  shadow-lg bg-white md:hidden">
      <img
        className="w-full object-cover h-28  "
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
      </div>
    </div>

  </>
  );
};

export default Card;
