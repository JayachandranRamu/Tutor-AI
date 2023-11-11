import React from 'react'
import Navbar from '../Components/Navbar'

const Courses = () => {


  const Courses=[{name:"NEM-111",type:"GENERAL"},{name:"RCT-211",type:"GENERAL"},
  {name:"RCT-101",type:"GENERAL"},{name:"SB-201",type:"GENERAL"},{name:"SB-111",type:"GENERAL"},{name:"JS-201",type:"GENERAL"},{name:"WEB-101",type:"GENERAL"}]

  return (
    <>
    <Navbar />
    <div> <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-8 py-3 sm:px-8 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">COURSES</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl px-8 py-8 sm:px-8 lg:px-8">
      {/* <!-- Your content --> */}
      <div className='grid  gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {Courses.map((el)=>{
       return <div className='flex flex-col border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
          <div className='flex  justify-start   items-center'>

          <div className='w-[30%]'>
          <img className='w-[80%]' src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ts36dsgqnibqq3xd2kc.png" alt="" />
          </div>
          <div>
            <p className='text-xl'>{el.name}</p>
            <p className='text-gray-400'>{el.type}</p>
            <span className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
<svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
</svg>
30 Minutes
</span>
          </div>
          </div>
          <div className='mt-5'>
          <span className="bg-gray-200 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
          <span className="bg-gray-200 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
          </div>
          <div>
         <button className='w-[100%] border bg-purple-500 rounded-[5px] p-[5px] mt-5'>START INTERVIEW</button>
          </div>
        </div>})}
      </div>
    </div>
  </main></div>
  </>
  )
}

export default Courses