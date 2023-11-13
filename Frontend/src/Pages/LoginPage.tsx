import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const Navigate=useNavigate();
    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();

        axios.post('http://localhost:8080/user/login',{email,password}).then((res)=>{

        console.log(res)
        if(res.data.message=="Something went wrong"){
            alert("wrong credentials")
        }
        else{
            alert("login successfull")
           localStorage.setItem("token", res.data.token);

           Navigate("/dashboard")
       }
  
        }).catch((err)=>{
        console.log(err)
        })




    }

  return (
 
    <div className="mx-auto max-w-lg py-6 px-6  sm:px-6 lg:px-8 m-[7%] ">
        <h1 className='text-center text-5xl my-6'>Login</h1>
                <form className="space-y-4"  action="#" onSubmit={handleSubmit}>
               
                    <div>
                        <label className="block mb-2 text-sm font-medium  dark:text-white">Your Email</label>
                        <input type="email" name="email" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                  
                    <div>
                        <label className="block mb-2 text-sm font-medium  dark:text-white">Your Password</label>
                        <input type="password" name="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
             
                    <div className="flex justify-between">
<div className="flex items-start">
    <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label  className="ms-2 text-sm font-medium  dark:text-gray-300">Remember Me</label>
</div>
<a href="#" className="text-sm  hover:underline text-purple-500">Lost Password?</a>
</div>
<button type="submit" className="w-full text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login To Your Account</button>
<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
Not Registered? <a href="/signup" className="text-purple-500 hover:underline dark:text-blue-500">Create Account</a>
</div> 
                    
                </form>
            </div>
           
  )
}

export default LoginPage