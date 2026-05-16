import axios from "axios"
import { getAccessToken } from "@/lib/token"

const api=axios.create({
  baseURL:"http://127.0.0.1:8000/api",

  headers:{
    "Content-Type":"application/json",
  },
})

api.interceptors.request.use(
  (config)=>{
    const token =getAccessToken()
    if(token){
      config.headers.Authorization=`Bearer ${token}`
    }
    console.log("Interceptor Running")
    return config

  },
  (error)=>{
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response)=>{
    return response
  },
  (error)=>{
    if(
      error.response &&
      error.response.status ===401
    ){
      localStorage.removeItem(
        "accessToken"
      )
      localStorage.removeItem(
        "refreshToken"
      )
      window.location.href="/login"
    }
    return Promise.reject(error)
  }
)
export default api


