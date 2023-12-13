import { useContext, useEffect, useState } from "react"
import HomePagePosts from "../Functionality/HomePagePosts"
import { URL } from "../url"
import { UserContext } from "../Context/UserContext";
import axios from "axios"
import { Link } from "react-router-dom"
const Home = () => {
  
  const {user}=useContext(UserContext)
  const [posts,setPosts]=useState([])
  console.log(user)
  //getting posts
  const fetchPosts=async()=>{
    try {
      //checking for category
      const res= await axios.get(URL+"/api/posts/")
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchPosts()
  })
  return (
    <div className="px-4 md:px-[10px] max-w-[171vh]">

     {posts.map((post)=>(
       <>
      <Link  to={user?`/posts/post/${post._id}`:"/login"}>
        <HomePagePosts  key={post._id} post={post} />
      </Link>
      </>
     
     
     
     ))}
    
    </div>
  )
}

export default Home