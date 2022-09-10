import React from 'react'
import whyusimg from '../assets/home_whytabcity.png'
import whyus from '../assets/whyus.png'
const WhyUs = () => {
    return (
        <>
            <div className=' w-[90%] bg-black text-white 2xl:flex-row xl:flex-row lg:flex-row flex flex-col rounded-xl m-auto container justify-between'>
                <div className=' p-10 2xl:pr-0 xl:pr-0 lg:pr-0 2xl:w-1/2  xl:w-1/2 lg:w-1/2 w-full text-start '>
                    <h1 className='text-4xl'>why</h1>
                    <div className='flex text-5xl  font-extrabold uppercase '>
                        <h1 className='text-[#1076bd]  mr-1'> Tab</h1>
                        <h1 className='ml-1'>city</h1>
                    </div>
                    <p className=' text-lg mt-5'> We are pleased to introduce ourselves to you as we are working in the field of designing since 1997 and later in 2009 seeing revolutionary changes in the market where all the business were invloving IT in all respects we started a new branch for website development/ designing.</p>
                    <div className='bottom-0 mt-28'>

                        <img className='bottom-0' src={whyus} alt="whyusimage" />
                    </div>

                    <div>
                    </div>

                </div>
                <div className='  bg-cover relative 2xl:-mt-12 xl:-mt-12 lg:-mt-12 right-0 bottom-0'>
                    <img src={whyusimg} alt="whyusimage" />

                </div>



            </div>
        </>
    )
}

export default WhyUs