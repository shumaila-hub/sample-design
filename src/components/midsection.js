import React from 'react'
import Homeabout from '../assets/home_about.jpg'
import { Link } from 'react-router-dom';
const Midsection = () => {
  return (


    <div className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap container m-auto  mt-20'>

      <div className='xl:w-1/2 lg:w-1/2 w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-20 sm:mt-40 mt-[15rem] mr-0   '>
        <img className='bg-cover bg-center ' src={Homeabout} />
      </div>
      <div className=' xl:w-1/2 2xl:w-1/2 lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full mt-24   '>

        <div className='   md:mt-0 sm:mt-0  mt-5  xl:pr-0 lg:pr-0 lg:pl-0 leading-8 p-5'>
          <h1 className=' text-5xl font-semibold'>Welcome to</h1>
          <div className=' flex text-5xl font-extrabold uppercase mt-2'>
            <h1 className='text-[#1076bd]  mr-2'> Tab</h1>
            <h1 >city</h1>
          </div>
          <p className=' font-bold mt-1'>Luxury Living, Healthy Life</p>

          <p className='xl:text-base 2xl:text-xl lg:text-base text-base  text-left   mt-3 font-medium ' >
            We are pleased to introduce ourselves to you as we are working in the field of designing since 1997 and later in 2009 seeing revolutionary changes in the market where all the business were invloving IT in all respects we started a new branch for website development/ designing.
            <div className=' mt-3'>
              When we started our company our aim was to be a successful company and our assest was our first client and now we are standing with more than 1700 client all over Pakistan, we have some international clients as well. Still we have goals to achieve and our clients are always with us, we never left any of them behined as we care for them a lot.
            </div>

          </p>
          <Link to="#"> <button className=' uppercase w-32 border border-[#1076bd] rounded-lg shadow-md mt-8 text-sm h-8'> learn more</button>  </Link>


        </div>
      </div>


    </div>





  );
}

export default Midsection