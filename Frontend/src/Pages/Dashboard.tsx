import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import {useSelector} from "react-redux"
import { GetHistoryDataOfUser } from '../Utilis/api';
const Dashboard = () => {

  const data=useSelector((data:any)=>data.AuthReducer.user);
  console.log(data)

  const [idata,setidata]=useState<any>([])

  useEffect(()=>{
GetHistoryDataOfUser(data._id).then(res=>setidata(res.data))
  },[])

  return (
    <>
    <Navbar />
    <div> <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-6 py-3 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">DASHBOARD</h1>
   </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl px-6 py-3 sm:px-6 lg:px-8">
    <div className='grid  gap-7 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 mb-10'>
    <div  className='flex flex-col border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
        <div className='flex  justify-start   items-center'>

<div className='w-[30%]'>
<img className='w-[85%] bg-white rounded-[50%] p-[15px]'  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM1Nzg5RkYiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMjE2LDcyVjE3Nkg0MFY3MkExNiwxNiwwLDAsMSw1Niw1NkgyMDBBMTYsMTYsMCwwLDEsMjE2LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiwxNjhoLThWNzJhMjQsMjQsMCwwLDAtMjQtMjRINTZBMjQsMjQsMCwwLDAsMzIsNzJ2OTZIMjRhOCw4LDAsMCwwLTgsOHYxNmEyNCwyNCwwLDAsMCwyNCwyNEgyMTZhMjQsMjQsMCwwLDAsMjQtMjRWMTc2QTgsOCwwLDAsMCwyMzIsMTY4Wk00OCw3MmE4LDgsMCwwLDEsOC04SDIwMGE4LDgsMCwwLDEsOCw4djk2SDQ4Wk0yMjQsMTkyYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOHYtOEgyMjRaTTE1Miw4OGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDg4WiIvPjwvc3ZnPg==" alt="" />
</div>
<div>
  <p className='text-xl '>COMPLETED INTERVIEWS</p>
  <p className='text-gray-400 font-[Poppins]'>TOTAL INTERVIEWS : {idata.length}</p>

</div>
</div>
</div>
       <div  className='flex flex-col border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
          <div className='flex  justify-start   items-center'>

          <div className='w-[30%]'>
          <img className='w-[85%] bg-white rounded-[50%] p-[15px]'  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGRDhEMTQiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMjE2LDcyVjE3Nkg0MFY3MkExNiwxNiwwLDAsMSw1Niw1NkgyMDBBMTYsMTYsMCwwLDEsMjE2LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiwxNjhoLThWNzJhMjQsMjQsMCwwLDAtMjQtMjRINTZBMjQsMjQsMCwwLDAsMzIsNzJ2OTZIMjRhOCw4LDAsMCwwLTgsOHYxNmEyNCwyNCwwLDAsMCwyNCwyNEgyMTZhMjQsMjQsMCwwLDAsMjQtMjRWMTc2QTgsOCwwLDAsMCwyMzIsMTY4Wk00OCw3MmE4LDgsMCwwLDEsOC04SDIwMGE4LDgsMCwwLDEsOCw4djk2SDQ4Wk0yMjQsMTkyYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOHYtOEgyMjRaTTE1Miw4OGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDg4WiIvPjwvc3ZnPg==" alt="" />
          </div>
          <div>
            <p className='text-xl '>AVAILABLE INTERVIEWS</p>
            <p className='text-gray-400 font-[Poppins]'>TOTAL INTERVIEWS : 7</p>
   
          </div>
          </div>
        
        </div>
   
        </div>

      {/* <!-- Your content --> */}
      {idata.length!=0 && <h2 className="text-xl font-bold tracking-widest my-2">COMPLETED INTERVIEWS</h2> }
      <div className='grid  gap-7 lg:grid-cols-3 py-3 md:grid-cols-2 sm:grid-cols-1'>
      {idata.length!=0 && idata.map((el:any)=>{
       return <div key={el._id} className='flex flex-col border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
          <div className='flex  justify-start   items-center'>

          <div className='w-[30%]'>
          <img className='w-[85%] bg-white rounded-[50%] p-[15px]'  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0Q0RDNjkiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMjE2LDcyVjE3Nkg0MFY3MkExNiwxNiwwLDAsMSw1Niw1NkgyMDBBMTYsMTYsMCwwLDEsMjE2LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiwxNjhoLThWNzJhMjQsMjQsMCwwLDAtMjQtMjRINTZBMjQsMjQsMCwwLDAsMzIsNzJ2OTZIMjRhOCw4LDAsMCwwLTgsOHYxNmEyNCwyNCwwLDAsMCwyNCwyNEgyMTZhMjQsMjQsMCwwLDAsMjQtMjRWMTc2QTgsOCwwLDAsMCwyMzIsMTY4Wk00OCw3MmE4LDgsMCwwLDEsOC04SDIwMGE4LDgsMCwwLDEsOCw4djk2SDQ4Wk0yMjQsMTkyYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOHYtOEgyMjRaTTE1Miw4OGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDg4WiIvPjwvc3ZnPg==" alt="" />
          </div>
          <div>
            <p className='text-xl '>{el.interview_name}</p>
            <p className='text-gray-400 font-[Poppins]'>{el.Interview_Time.split(" ").slice(1, 5).join(" ")}</p>
   
          </div>
          </div>
 
          <div className='mt-3'>
  
      

          </div>
          <div >
            <a href={"/report/"+el._id} className="inline-flex  justify-center mt-3 border items-center w-[100%] py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            VIEW REPORT
                
            </a>
           
        </div>
          {/* <div>
         <button className='w-[100%] border bg-purple-500 rounded-[5px] p-[5px] mt-5 hover'>START INTERVIEW</button>
          </div> */}
        </div>})}
        </div>
    </div>
  </main> </div>

 
 
  </>
  )
}

export default Dashboard