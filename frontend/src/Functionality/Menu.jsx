import { useContext } from "react"
import { UserContext } from "../Context/UserContext";
import { URL } from "../url";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Menu = () => {
    // Extract user data and the setUser function from the UserContext
    const user=useContext(UserContext)
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()
       // Function to handle user logout
    const handleLogout=async()=>{
      try{
        
        // eslint-disable-next-line no-unused-vars
        const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
        // console.log(res)
        setUser(null)
        // Hook to programmatically navigate to routes
        navigate("/login")
    
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    
    <div className="border-4 bg-white w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
        {!user && <h3 className="text-slate-700 text-md hover:text-gray-500 cursor-pointer"><Link to="/login">Login</Link></h3>}
        {!user && <h3 className="text-slate-700 text-md hover:text-gray-500 cursor-pointer"><Link to="/register">Register</Link></h3>}
        {user && <h3 className="text-slate-700 text-md hover:text-gray-500 cursor-pointer"><Link to={"/myblogs/"+user._id}>My Blogs</Link></h3>}
        {user && <h3 onClick={handleLogout} className="text-slate-700 text-md hover:text-gray-500 cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu