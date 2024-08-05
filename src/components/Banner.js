import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div className='w-[100vw] bg-black text-white p-20'>
           <div className='m-auto md:w-2/3  flex flex-col items-center'>
                 <h1 className='text-3xl font-bold font-sans md:text-5xl m-3 text-center'>Welcome to Our Blog </h1>
                 <p className='text-xl text-center '>Start your blog today and joi the community of writers and readers who are passionate of sharing their stories and ideas. We offer everythings you need to get started, from helpful tips and tutorials.</p>
                 <Link to='/body/blog' className='m-5 text-xl md:text-2xl font-medium flex  flex-row items-center gap-2 hover:text-[#FF9933] transition-[0.5s]'>learn more <FaArrowRight  className='mt-2' /></Link>
           </div>
       
    </div>
  )
}

export default Banner
 