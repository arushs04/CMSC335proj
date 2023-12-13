import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from "../Context/UserContext";
import axios  from 'axios';
import { useNavigate } from "react-router-dom"
import { URL } from '../url';
const WritePost = () => {

    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const {user}=useContext(UserContext)
    const [cat, setCat]=useState("")
    const [cats, setCats]=useState ([])
    const navigate=useNavigate()

    const deleteCategory= (i) => {
        let updatedCats=[...cats]
        updatedCats.splice (i)
        setCats (updatedCats)
    }
    const addCategory= () => {
        let updatedCats=[...cats]
        updatedCats.push (cat)
        setCat ("")
        setCats (updatedCats)
    }

    const handleCreate=async(e)=>{
        e.preventDefault()
        const post={
            title,
            desc,
            username:user.username,
            userId:user._id,
            categories:cats
          }
          if(file){
            const data=new FormData()
            const filename=Date.now()+file.name
            data.append("img",filename)
            data.append("file",file)
            post.photo=filename
            try{

                //console.log(user)
                // eslint-disable-next-line no-unused-vars
                const imgUpload=await axios.post(URL+"/api/upload",data)
              
            }
            catch(err){
              console.log(err)
            }
          }
          try{
            const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
            navigate("/posts/post/"+res.data._id)  
          }
          catch(err){
            console.log(err)
          }

    }

  return (
    <div>
        <div className= 'px-6 md: px-[150px] mt-8'>
        <h1 className='font-bold md: text-2x1 text-3xl mt-8'>Create a post</h1>
        <form className= 'pt-3	w-full flex flex-col space-y-4 md: space-y-8 '>
            <input onChange={(e)=>setTitle(e.target.value)} type= "text" placeholder='Enter post title' className='px-4 py-4  border-4 border-solid border-slate-500  outine-none rounded-lg'/>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" className='px-4 rounded-lg'/>
            <div className='flex flex-col '>
            <div className='flex items-center space-x-4 m: space-x-8 '>
              <div className="flex-cols ">
              <select className='py-2  border-4 border-solid border-slate-500  outine-none rounded-lg' onChange={(e)=>setCat(e.target.value)} >
                <option value="" disabled selected>Select your categories</option>
                <option  value="HEALTH">HEALTH</option>
                <option  value="NEWS">NEWS</option>
                <option  value="TECH">TECHNOLOGY</option>
              </select>
                
                </div>
                <div onClick={addCategory} className= 'obg-black text-black border-4 rounded-lg border-slate-500 px-4 py-2 font-semibold cursor-pointer '>Add</div>
            </div>

            <div className ='flex px-4 mt-3'>

                {cats?.map((c,i)=>(
            <div key = {i} className= 'flex border-4 border-solid border-slate-500 justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
            <p>{c}</p>
            <p onClick={deleteCategory} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>

            </div>
            ))}

            </div>
            
            </div>
            <textarea  onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='rounded-lg border-4 border-solid border-slate-500 px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button onClick={handleCreate} className='bg-slate-500 w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
            </form>

        </div>
        
    </div>
  )
}

export default WritePost