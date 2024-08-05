import React from 'react'
import { CiUser } from "react-icons/ci";

function BlogCard({data}) {
  // console.log(data)
   
  return (
    <div className='shadow-lg shadow-black rounded-md p-3 hover:scale-[1.1] transition ease-in-out delay-150 duration-300'>
      <img src={data.image} alt='error'/>
        <p className='font-semibold mt-1'>{data.title.length>50?`${data.title.slice(0,50)}....`:data.title}</p>
        <p className='flex items-center mt-1'><CiUser />{data.author}</p>
        <p className='mt-1'>{`Published : ${data.published_date}`}</p>
    </div>
  )
}

export default BlogCard
