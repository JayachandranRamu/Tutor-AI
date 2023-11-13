import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const[name,setName]=useState<string>("")
    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")

    const Navigate=useNavigate();

    const handleSubmit=(e:FormEvent)=>{
      //  e.preventDefault()
       // console.log(name,email,password)
       // Navigate("/login")

       e.preventDefault();
axios.post('http://localhost:8080/user/register',{name,email,password}).then((res)=>{
  console.log(res)
  //const AlreadyPresent = res.data.userAlreadyPresent
  if(res.data.message=="User is already present, please login.") {
    alert("user already exists with this email,please login")
}else{
      alert("user registerd successfully ,please login")
      Navigate("/login")
  }
}).catch((err)=>{
  console.log(err)
})
    }

  return (
 
    <div className="mx-auto max-w-lg py-6 px-6  sm:px-6 lg:px-8 m-[7%]">
        <h1 className='text-center text-5xl my-6'>SignUp</h1>
                <form className="space-y-4" onSubmit={handleSubmit} action="#">
                <div>
                        <label className="block mb-2 text-sm font-medium  dark:text-white">Your Name</label>
                        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium  dark:text-white">Your Email</label>
                        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                  
                    <div>
                        <label className="block mb-2 text-sm font-medium  dark:text-white">Your Password</label>
                        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label  className="ms-2 text-sm font-medium  dark:text-gray-300">I am agree with all the terms and conditions.</label>
                        </div>
                       
                    </div>
                    <button type="submit" className="w-full text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " >Register Your Account</button>
                    
                </form>
            </div>
           
  )
}

export default SignUpPage