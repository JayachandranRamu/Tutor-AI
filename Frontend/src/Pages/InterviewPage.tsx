import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetSingleHistoryData } from '../Utilis/api';
import jsPDF from 'jspdf';

const ReportPage = () => {

  let {id}=useParams();
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
  setData(res.data)
})
  },[])

  return (
    <div> <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">REPORT</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* <!-- Your content --> */}
      <div>
        <p className='text-lg'>INTERVIEW : <span className='text-gray-400 font-[Poppins]'>{data?.interview_name}</span></p>
        <p  className='text-lg'>INTERVIEWER : <span className='text-gray-400 font-[Poppins]'>{data?.interviewee_name}</span></p>
        <p  className='text-lg'>SCORE : <span className='text-gray-400 font-[Poppins]'>{data?.score}</span></p>
        <p  className='text-lg'>CONVERSATION : <span className='text-gray-400 font-[Poppins]'> 
</span></p>
<button onClick={handleDownload}>Download Conversation as PDF</button>
      </div>
    </div>
  </main></div>
  )
}

export default ReportPage