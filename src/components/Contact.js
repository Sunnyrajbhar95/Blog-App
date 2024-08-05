import React from 'react'

function Contact() {
  return (
     <div>
    <div className="w-[100vw] bg-black text-white p-20">
      <div className="m-auto md:w-2/3  flex flex-col items-center">
        <h1 className="text-3xl font-bold font-sans md:text-5xl m-3 text-center">
            Contact Us
        </h1>
      </div>
     
    </div>
        <div  className='w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-2 py-4 gap-4 m-4 sm:place-items-center' >
            <div>
                <img src='https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/contact.png?raw=true' alt='Error'/>
            </div>
               
               <form className='w-[60%] flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                <label for="name" className='font-normal'>Full Name:</label>
                <input type='email' placeholder='Full Name' id='name' className='border  p-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col gap-1'>
                <label for="email" className='font-normal'>Email address:</label>
                <input type='email' placeholder='Email address' id='name' className='border  p-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col gap-1'>
                <label for="subject" className='font-normal'>Subject:</label>
                <textarea type='textarea' placeholder='Enter your subject' id='subject' className='border  p-2 rounded-md outline-none' rows={5}/>
                </div>
               
                <button className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
              </form>
        </div>
    </div>
  )
}

export default Contact
