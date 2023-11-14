import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetSingleHistoryData } from '../Utilis/api';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';

const ReportPage = () => {

  let {id}=useParams();
  const userData=useSelector((data:any)=>data.AuthReducer.user);

  const handleDownload = () => {
    // Get the input text using the ref


    // Create a new instance of jsPDF
    const pdf = new jsPDF();

    // Set properties for the PDF (optional)
    // pdf.setProperties({
    //   title: 'Input Text PDF',
    //   subject: 'Downloaded Text',
    // });

    // Add the input text to the PDF
    let arr=data.conversation;
    
    arr.forEach((data:any, index:any) => {
      if(index!=0 && index!=arr.length-1){
        pdf.text(`S:No : ${data.index+1}. Role : ${data.role}
        Content : ${data.content}
        `, 10, 10 + index*10);
      }
    
  });

    // Save the PDF with a specific filename
    pdf.save(`${data.name} Conversation.pdf`);
  };


const [data,setData]=useState<any>("");

  useEffect(()=>{
GetSingleHistoryData(id).then(res=>{
  console.log(res.data);
  console.log(res.data.interviewee_name)
  setData(res.data)
})
  },[])

  return (
    <div> 
      <Navbar />
      <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">INTERVIEW REPORT :-</h1>
    </div>
  </header>
    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      {/* <!-- Your content --> */}
      

{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
    
        <tbody>
        <tr className=" border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white dark:bg-gray-800">
                    INTERVIEW :
                </th>
                <td className="px-6 py-4">
                {data?.interview_name}
                </td>
                
            </tr>
            <tr className=" border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  dark:text-white dark:bg-gray-800">
                INTERVIEWEE :
                </th>
                <td className="px-6 py-4">
                {data?.interviewee_name}
                </td>
                
            </tr>
            <tr className=" border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  dark:text-white dark:bg-gray-800">
                   FEEDBACK :
                </th>
                <td className="px-6 py-4">
                {data?.score}
                </td>
                
            </tr>
            <tr className=" border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  dark:text-white dark:bg-gray-800">
                CONVERSATION :-
                </th>
              
                
            </tr>
            
        </tbody>
    </table>
</div> */}

        <p className='text-lg mt-2'>INTERVIEW  :  <span className='text-gray-400 font-[Poppins]'>{data?.interview_name}</span></p>
        <p  className='text-lg  mt-2'>INTERVIEWER : <span className='text-gray-400 font-[Poppins]'>{data?.interviewee_name}</span></p>
        <p  className='text-lg  mt-2'>FEEDBACK : <span className='text-gray-400 font-[Poppins]'>{data?.score}</span></p> 
         <p  className='text-lg my-2'>CONVERSATION :</p> 
        <div className='w-full h-[80vh] flex flex-col justify-between my-2 border rounded-[10px] p-[20px] md:h-[81vh] bg-gray-900 border-gray-300'>
                <div className='overflow-auto example' >
                

                   {data?.conversation?.map((el: any, ind: any) => ind != 0 ? <>{el.role == "assistant" ? <><div className="chat chat-start">
                      
                      <div className="chat-header">
                        {data?.interviewee_name}
                      
                      </div>
                      <div className="chat-bubble">{el?.content}
                   
  
             </div></div></> :
                      <><div className="chat chat-end">
                       
                        <div className="chat-header">
                          {userData?.name}
                          
                          {/* <time className="text-xs opacity-50">12:46</time> */}
                        </div>
                        <div className="chat-bubble">{el?.content}</div>
                        {/* <div className="chat-footer opacity-50">
    Seen at 12:46
  </div> */}
                      </div></>}</> : null)}

      </div>
    </div>
  </div>
  </div>
  )
}

export default ReportPage