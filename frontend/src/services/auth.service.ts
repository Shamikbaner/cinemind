import api from './api'

export const registerUser = async (data: {
  email: string
  username: string
  password: string
}) => {
  const response = await api.post('/users/register/', data)

  return response.data
}

export const loginUser=async(
  data:{
    email:string
    password:string
  }
)=>{
  const response=await api.post("/users/token/",data)
  return response.data
}
