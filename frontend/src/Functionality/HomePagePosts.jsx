/* eslint-disable react/prop-types */
import { IF } from "../url"

// Define the HomePagePosts component which receives a post object 
const HomePagePosts = ({post}) => {
  return (
    // Main container for the post
    <div className="  flex ml-10 border-2 border-solid border-slate-200 block bg-white rounded-md shadow hover:gray dark:gray dark:border-gray dark:hover:bg-gray-200 content-center mt-12 space-x-4">
      <div className="w-[35.2rem] h-[20rem] flex  justify-center items-center">
        <img  className = "h-full w-full rounded-md	border border-sky-600 object-cover" src={IF+post.photo}/>
      </div>
      <div className="flex flex-col w-[65%] ">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2x1"> 
        {post.title}
        </h1> 
        <div className="flex pr-4 mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          
          <div className="flex space-x-2 text-sm"> 
          <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
          <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          
          </div>
        </div>
        <div className="flex-cols">
        <p className=" text-sm md:text-lg">{post.desc.slice(0,200)+"   ..."}</p>
        <button className=" bg-slate-300 rounded-lg text-sm text-black px-2 py-2 md:w-[20%] mt-4 md:mt-0">Read more</button>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
              <p>Categories:</p>
              <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c,i)=>(
              <>
              <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
              </>
            
              ))}
            
              </div>
            </div>
        </div>
      </div>
      
    </div>
      
  )
}

export default HomePagePosts