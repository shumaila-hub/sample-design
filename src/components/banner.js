import React from 'react';
import callus from '../assets/button_callnow.png';
import visit from '../assets/button_schedulenow.png';

const Banner = () => {
  return (
    <div className=' absolute top-[85%] 2xl:flex-row xl:flex-row lg:flex-row flex-col flex justify-between items-center 2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-10 sm:ml-10 ml-5 2xl:p-10 xl:p-10 lg:p-10 p-5 w-[90%] bg-[#1076bd] rounded-xl '>

      <div className='text-white text-2xl font-bold'>
        <h1> Do you want to schedule your visit? </h1>
        <h1>  Just fill the form </h1>
      </div>
      <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col '>
        <img className=' 2xl:mt-0 xl:mt-0 lg:mt-0 mt-3 mr-2' src={callus} alt="callus" />
        <img className='mt-3 2xl:mt-0 xl:mt-0 lg:mt-0' src={visit} alt="callus" />
      </div>


    </div>
  )
}

export default Banner