const express = require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
const multer=require("multer")
const path=require("path")
const userRoute= require("./routes/users")
const authRoute = require("./routes/auth")
const postsRoute = require("./routes/posts")
const commentRoute= require("./routes/comments")
const cookieParser=require('cookie-parser')
const bcrypt=require("bcrypt")

 const connectDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected")
    }
    catch(err){
        console.log (err)
    }
 }

dotenv.config()
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/Posts",postsRoute)
app.use("/api/comments",commentRoute)


const storage =multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        //fn(null,"image1.jpg")
    }
})
const upload=multer({storage:storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded sucessfully")
})
app.listen(process.env.PORT_NUMBER,()=>{
    connectDatabase()
    console.log("App is on port:" + process.env.PORT_NUMBER )
})