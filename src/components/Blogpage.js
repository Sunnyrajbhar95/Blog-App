import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'
function Blogpage() {
    const data=useSelector((state)=>state.filter.data)
    // const res=useSelector((state)=>state.filter.data);
     const page=useSelector((state)=>state.page.currentPage)
     
    // console.log(res)
    console.log(page)
  if(data==null)return;
  return (
    <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-4 p-10' >
          {
            data.slice(page*9-9,page*9).map((data,index)=>{
                return <Link to={`/body/blog/${index}`}><BlogCard key={index} data={data}/></Link>
            })
          } 
        

             
    </div>

  )
}

export default Blogpage
