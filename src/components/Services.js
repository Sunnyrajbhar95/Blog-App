import React from 'react'
import { SiCodesignal } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbComponents } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";

function Services() {
  return (
    <div>
          <div className='w-[100%] flex flex-col justify-center items-center py-7' >
              <p className='text-red-400 text-[1.2rem] my-1 font-bold'>Our Services</p>
              <h3 className='font-bold text-[1.5rem] my-1'>What We offer</h3>
              <p className='w-[100%] md:w-[45%] lg:w-[45%] text-center text-[1.2rem] px-5 '>There are many variations of passage lorem ipsum available but the majority have suffered alteration in some form.</p>
          </div>
           <div className='w-[100%] mt-5 py-7'>
              <div className='w-[70%] mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-5'>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <SiCodesignal  className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>Refreshing Design</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <RiTailwindCssFill  className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>Based on taiwind CSS</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <TbComponents   className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>300+ Components</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <RiComputerLine  className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>Speed Optimization</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <MdOutlineDashboardCustomize  className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>Fully Customizable</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
                 <div className='p-7 border rounded-md shadow-md shadow-black' >
                  <MdTipsAndUpdates  className='text-[3rem] text-blue-600 mt-1'/>
                  <h3 className='font-serif font-semibold mt-2 text-xl'>Regular Updates</h3>
                    <p className='text-md mt-1'>A refreshing design is characterized by its clean and minimalistic approach, creating a modern and inviting aesthetic.</p>
                 </div>
              </div>
          </div>
    </div>
  )
}

export default Services
