import axios from "axios"

let URL="http://localhost:8000";

let InterviewURL=URL+"/interview";

export const GetCourseData=()=>{
   return axios.get(InterviewURL+"/data")
}

export const OpenApiChat=(data:any)=>{
   return axios.post(URL+"/openai",data)
}