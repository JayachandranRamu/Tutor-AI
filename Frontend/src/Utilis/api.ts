import axios from "axios"

let URL="http://localhost:8000";

let InterviewURL=URL+"/interview";

export const GetCourseData=()=>{
   return axios.get(InterviewURL+"/data")
}