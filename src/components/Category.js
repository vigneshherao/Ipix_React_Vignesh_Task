import React from 'react';

const Category = ({ categoryInfo }) => {
  
  const { image, name } = categoryInfo;

  return (
    <div className='w-full sm:w-[100px] md:w-[200px] h-auto border text-center p-8 m-5 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-95'>
      <div>
        <img className='w-full h-auto rounded-full' src={image} alt={name} />
      </div>
      <span className='block mt-2 text-sm font-mono font-semibold'>{name}</span>
    </div>
  );
};

export default Category;
