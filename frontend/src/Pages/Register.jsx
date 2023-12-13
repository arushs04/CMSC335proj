import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'
import { useNavigate } from "react-router-dom"
const Register = () => {  
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[error,setError]=useState("")
  const navigate=useNavigate()
  const handleRegister=async()=>{
    try{
      
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.password)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
    }
    catch(err){
      setError(true)
      console.log(err)
    }
  }
  return (
    
   
    <div className="w-full flex justify-center items-center h-[70vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left"> Welcome to BrightBlog! Register here</h1>
        <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 Oborder-black outline-0" type="text" placeholder="Enter your email"/>
        <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-2 Oborder-black outline-0" type="text" placeholder="Enter your username"/>
        <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 Oborder-black outline-0" type="text" placeholder="Enter your password"/>
        <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Register</button>
        {error && <h3 className="text-red-500 text-sm">Username or Email already exists!</h3>}
        </div>
    </div>
  )
}

export default Register