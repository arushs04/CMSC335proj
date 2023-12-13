import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext"
import axios from "axios"
import { URL } from "../url"
import HomePosts from "../Functionality/HomePagePosts.jsx"



const MyBlogs = () => {
    const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const {user}=useContext(UserContext)

  const fetchPosts=async()=>{
    try{
    
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[search])

  return (
    <div>

        <div className="px-8 md:px-[200px] ">
        {!noResults?
        posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
        </div>
    </div>
  )
}

export default MyBlogs