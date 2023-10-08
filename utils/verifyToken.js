import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) =>{
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).json({success:false,message:"not authorised"})
    }

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user) => {
        if(err){
            return res.status(401),json({success:false,message:"token is invalid"})
        }
        req.user = user
        next()
    })
}

export const verifyUser = (res,req,next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            next()
        }
        else{
            return res.status(401).json({success:false,message:"you are not authenticated"})
        }
    })
}

export const verifyAdmin = (res,req,next) => {
    verifyToken(req,res,next,() =>{
        if(req.user.role === "admin"){
            next()
        }
        else{
            return res.status(401).json({success:false,message:"your are not authorized"})
        }
    })
}