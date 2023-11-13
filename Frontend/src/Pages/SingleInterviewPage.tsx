import React, { FormEvent, useEffect, useState } from 'react'
import { OpenApiChat } from '../Utilis/api'
import RecordView from '../Components/VideoFunction'
import Dictaphone from '../Components/SpeechToText'

const SingleInterviewPage = () => {

const [text,setText]=useState<any>("")
const [conversation,setConversation]=useState<any>([])

 const HandleSubmit=(e:FormEvent)=>{
e.preventDefault();
let obj={role:"user",content:text.trim()};
setConversation((prev:any)=>[...prev,obj]);
console.log(conversation)
OpenApiChat(conversation).then((res:any)=>{
  console.log(res.data)
  setConversation((prev:any)=>[...prev,res.data])})
 }



  return (
    <div> <header className="bg-black text-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-widest">INTERVIEW</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl py-6 px-8 sm:px-6 lg:px-8">
   <div className='flex w-full flex-col  justify-between md:flex-row'>
    <div className='mx-3  '>
<div className='flex flex-col justify-between items-center'>


<div className='h-[39.5vh] w-[350px] my-2  border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'></div>
<div className='h-[39.5vh]   my-2  border rounded-[10px]   bg-gray-900 border-gray-300'>
  <RecordView />
</div>
</div>

    </div>
    
    <div className='w-full mx-3  md:w-[80%] '>
    
    <div className='w-full h-[81.3vh] flex flex-col justify-between my-2 border rounded-[10px] p-[20px]  bg-gray-900 border-gray-300'>
<div className='overflow-y-scroll ' >
  {conversation.length!==0 && 

  conversation.map((el:any)=>el.role=="assistant"?<><div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg" />
    </div>
  </div>
  <div className="chat-header">
   Assistant
    {/* <time className="text-xs opacity-50">12:45</time> */}
  </div>
  <div className="chat-bubble">{el.content}</div>
  {/* <div className="chat-footer opacity-50">
    Delivered
  </div> */}
</div></>:
<><div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.freepik.com/premium-photo/man-with-glasses-tie-with-tie-it_745528-2818.jpg" />
    </div>
  </div>
  <div className="chat-header">
    User
    {/* <time className="text-xs opacity-50">12:46</time> */}
  </div>
  <div className="chat-bubble">{el.content}</div>
  {/* <div className="chat-footer opacity-50">
    Seen at 12:46
  </div> */}
</div></>)}
</div>
<Dictaphone />
<div>
<form onSubmit={HandleSubmit}>
    <label className="sr-only">Your message</label>
  
    <div className="flex items-center w-full  py-2 rounded-lg  dark:bg-gray-700">
      
        <textarea id="chat" value={text} onChange={(e:any)=>setText(e.target.value)} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button type="submit" className="inline-flex justify-center p-3 border text-blue-600 rounded-full cursor-pointer hover:bg-black dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span className="sr-only">Send message</span>
        </button>
    </div>
</form>
    </div>
 
   
    </div>
   </div>
    </div>
    </div>
  </main></div>
  )
}

export default SingleInterviewPage