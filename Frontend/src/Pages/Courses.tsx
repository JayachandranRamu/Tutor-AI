import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { GetCourseData } from '../Utilis/api'

const Courses = () => {



  const [data,setData]=useState<any>([])

  useEffect(()=>{
GetCourseData().then(res=>setData(res.data))
  },[])
  
  return (
    <>
    <Navbar />
    <div> <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-8 py-3 sm:px-8 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">INTERVIEWS</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl px-8 py-8 sm:px-8 lg:px-8">
      {/* <!-- Your content --> */}
      <div className='grid  gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {data.length!=0 && data.map((el:any)=>{
       return <div key={el._id} className='flex flex-col border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
          <div className='flex  justify-start   items-center'>

          <div className='w-[30%]'>
          <img className='w-[85%]' src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ts36dsgqnibqq3xd2kc.png" alt="" />
          </div>
          <div>
            <p className='text-xl '>{el.name}</p>
            <p className='text-gray-400 font-[Poppins]'>{el.type}</p>
   
          </div>
          </div>
 <div className='mt-5'>
 <span className="bg-white text-black  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
<svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
</svg>
{el.timing.duration}
</span>
 </div>
          <div className='mt-3'>
  
        {el.topics.map((el:any)=> <div className='mb-3' key={el}><span className="bg-white  text-black text-sm font-medium me-2 px-2.5 py-0.5   rounded dark:bg-gray-700 dark:text-gray-300">{el}</span></div>) }

          </div>
          <div >
            <a href={"/interview/"+el._id} className="inline-flex  justify-center mt-3 border items-center w-[100%] py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            START INTERVIEW
                
            </a>
           
        </div>
          {/* <div>
         <button className='w-[100%] border bg-purple-500 rounded-[5px] p-[5px] mt-5 hover'>START INTERVIEW</button>
          </div> */}
        </div>})}
      </div>
    </div>
  </main></div>
  </>
  )
}

export default Courses