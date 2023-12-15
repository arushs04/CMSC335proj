import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../Context/UserContext"
import { IF } from "../url"

const NavigationBar = () => {
  const[menu,setMenu]=useState(false)
  
  //Display the menu
  const showMenu=()=>{
  setMenu(!menu)}

  const {user}=useContext(UserContext)

  //Html
  return (
    <div className = "font-sans bg-slate-300 flex px-6 md:px-[100px] py-1">

      <div className="py-15 w-[10.2rem] h-[10rem]">
      <a href="/"><img  className = "h-full w-full rounded-md	" src={IF+"BrightBlog-logos_transparent.png"}/></a>
      </div>
      
      <div className="flex pl-4 space-x-12 py-16">
        {<h3 className="text-slate-700 text-xl hover:text-gray-500 cursor-pointer font-semibold"><Link to={"/health"}>Health</Link></h3>}
        {<h3 className="text-slate-700 text-xl hover:text-gray-500 cursor-pointer font-semibold"><Link to={"/technology"}>Technology</Link></h3>}
        {<h3 className="text-slate-700 text-xl hover:text-gray-500 cursor-pointer font-semibold"><Link to={"/news"}>News</Link></h3>}
        {<h3 className="text-slate-700 text-xl hover:text-gray-500 cursor-pointer font-semibold"><Link to={"/APIpage"}>Our Offices</Link></h3>}
      </div>
        <div className="text-slate-700 absolute right-16 py-16 hidden text-xl md:flex font-semibold items-center justify-center space-x-7 md: space-x-10">
            {user? <h3> <Link to ="/write"> New Post </Link> </h3>: <h3><Link to="/login">Login</Link></h3> }
            {user? <div onClick={showMenu}>

            <p className="cursor-pointer relative">
            <FaBars/>
            </p>
            {menu && <Menu/>}

            </div>:<h3><Link to="/register">Register</Link></h3> }
        </div>
        <div onClick={showMenu} className=" md:hidden sm:hidden text-lg" >
          <p className="cursor-pointer relative">
            <FaBars/>
          </p>
          {menu && <Menu/>}
        </div>

    </div>
  )
}

export default NavigationBar
