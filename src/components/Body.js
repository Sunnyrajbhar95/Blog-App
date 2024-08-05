import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from './Footer';


function Body() {
  return (
    <div>
      <Header/>
       <Outlet /> {/* Used here if you want to render nested routes */}
       <div className='mt-10 bg-blue-900'>
       <Footer />
       </div>
    </div>
  )
}

export default Body
