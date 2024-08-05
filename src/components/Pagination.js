import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament,decreament } from '../utilities/pageSlice'

function Pagination() {
    const dispatch=useDispatch();
    const page=useSelector((state)=>state.page.currentPage)
    const data=useSelector((state)=>state.filter.data)


    const handlePage=()=>{
        if(page<Math.ceil((data.length)/9))
        {
            dispatch(increament())
        }
    }

    const handlePage1=()=>{
        if(page>1)
        {
            dispatch(decreament());
        }
    }
    if(data==null)
    {
        return
    }
  return (
    <div className='flex gap-1 justify-center mt-10 items-center '>
        <button onClick={handlePage1} className='py-1 px-4 bg-blue-500 text-white rounded-md'>previous</button>
        <p className='font-bold'>{`${page} of ${Math.ceil((data.length)/9)}`}</p>
        <button onClick={handlePage} className='py-1 px-4 bg-blue-500 text-white rounded-md' >Next</button>
    </div>
  )
}

export default Pagination
