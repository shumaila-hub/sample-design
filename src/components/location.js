import React from 'react'
import locationimg from '../assets/home_location.png'
const Location = () => {
    return (
        <>
            <div className='container mx-auto  mb-10'>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <h1 className=' text-3xl font-medium '>Our Prime </h1>
                    <h1 className=' text-3xl font-medium '>Location</h1>
                </div>

                <div className='flex  items-center justify-center '>

                    <div className=''>
                        <div className='text-end relative 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-24 sm:ml-20 ml-16'>
                            <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>10</span><span className='font-semibold'>KM</span>
                                                   
                           <p className='text-center text-black text-sm font-semibold '> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-start relative 2xl:mr-28 xl:mr-28 lg:mr-28 md:mr-24 sm:mr-20 mr-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>05</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-start relative 2xl:mr-28 xl:mr-28 lg:mr-28 md:mr-24 sm:mr-20 mr-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>11</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-end relative 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-24 sm:ml-20 ml-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>06</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                    </div>

                    <div className='mt-16 2xl:px-28 xl:px-28 lg:px-28 md:px-14 sm:px-10 px-5'>
                        <img className=' ' src={locationimg} />
                        <div className='mx-12 flex justify-center items-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-extrabold uppercase absolute 2x:-mt-[7.5rem] xl:-mt-[7.5rem] lg:-mt-[7.5rem] md:-mt-[6.5rem] sm:-mt-[4.5rem] -mt-[5rem] xl:ml-20 lg:ml-20 ml-10 '>
                            <h1 className='text-[#1076bd]  mr-1'> Tab</h1>
                            <h1 className='ml-1'>city</h1>
                        </div>
                    </div>
                    <div className=' flex flex-col  '>
                        <div className='text-end relative  2xl:mr-28 xl:mr-28 lg:mr-28 md:mr-24 sm:mr-20 mr-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>10</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-end relative 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-24 sm:ml-20 ml-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>05</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-end relative 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-24 sm:ml-20 ml-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>11</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                        <div className='text-end relative  2xl:mr-28 xl:mr-28 lg:mr-28 md:mr-24 sm:mr-20 mr-16'>
                        <span className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-semibold'>06</span><span className='font-semibold'>KM</span>
                            <p className='text-center text-black text-sm font-semibold'> From <br/> Rawat Chowk</p>
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Location