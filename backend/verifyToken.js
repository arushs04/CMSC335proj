const jwt=require('jsonwebtoken')

// Define a middleware function to verify the authenticity of a JWT
const verifyToken=(req,res,next)=>{
    const token=req.cookies.token

    // Check if the token exists
    if(!token){
        return res.status(401).json("You are not authenticated")
    }
    // If there's a token, verify its validity using the JWT library
    jwt.verify(token,process.env.SECRET,async(err,data)=>{
        if(err){
            return res.status(403).json("Token not valid")
        }
        req.userId=data._id
        //console.log("passed")
        next()
    })
}
module.exports=verifyToken