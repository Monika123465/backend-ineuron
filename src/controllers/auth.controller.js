import User from '../models/user.model.js'
import asyncHandler from '../service/asyncHandler.js'
import CustomError from '../utils/customError.js'

export const cookieOptions={
    expires:new Date(Date.now()+3*24*60*60*1000),
    httpOnly:true
}

export const signUp=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    if(!name||!email||!password){
        throw new CustomError("Please add all fields",400)
    }

    const existingUser=await User.findOne({email})
    if(existingUser){
        throw new CustomError("user already exists",400)
    }

    const user=await User.create({
        name,
        email,
        password
    })

    const token=user.getJWTtOKEN()

    user.password=undefined
    res.cookie("token",token,cookieOptions)

    res.status(200).json({
        success:true,
        token,
        user
    })
})

export const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        throw new CustomError("Please fill all details",400)
    }
    const user=User.findOne({email}).select("+password")

    if(!user){
        throw new CustomError("Invalid credentials",400)
    }
    const isPasswordMatched=await user.comparePassword(password)
    if(isPasswordMatched){
        const token=user.getJWTtoken()
        user.password=undefined
        res.cookie("token",token,cookieOptions)
        return res.status(200).json({
            success:true,
            token,
            user
        })
    }
    throw new CustomError('password is incorrect',400)
})

export const logout=asyncHandler(async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:'Logged Out'
    })
})
export const getProfile=asyncHandler(async(req,res)=>{
    const {user}=req
    if(!user){
        throw new CustomError('user not found',401)
    }
    res.status(200).json({
        success:true,
        user
    })
})