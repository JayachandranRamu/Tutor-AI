import axios from "axios"

let URL="https://tutor-ai-backend.vercel.app";

let UserURL=URL+"/user";

let InterviewURL=URL+"/interview";

let HistoryURL=URL+"/history";

//User-Request

export const LoginUserRequest=(obj:any)=>{
  return axios.post(UserURL+"/login",obj);
}

export const UserRegister=(obj:any)=>{
   return axios.post(UserURL+'/register',obj)
}

//Course-Data

export const GetCourseData=()=>{
   return axios.get(InterviewURL+"/data")
}

export const GetSingleCourseData=(id:any)=>{
   return axios.get(InterviewURL+"/data/"+id)
}

//History

export const AddHistory=(obj:any)=>{
   return axios.post(HistoryURL+"/add",obj)
}

export const GetHistoryDataOfUser=(id:any)=>{
   return axios.get(HistoryURL+"/"+id)
}

export const GetSingleHistoryData=(id:any)=>{
   return axios.get(HistoryURL+"/singleData/"+id)
}


export const OpenApiChat=(data:any)=>{
   return axios.post(URL+"/openai",data)
}