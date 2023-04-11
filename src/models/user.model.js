import mongoose from "mongoose";
import authRoles from "../utils/authroles.js";

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:['true',"Name must be required"],
    maxLength:[50,'Name must be less than 50 chars']

},
email:{
    type:String,
    required:['true','Email is required']
},
password:{
    type:String,
    required:['true','password is required'],
    minLength:[8,'password must be atelast 8 chars'],
    select:false
},
roles:{
    type:String,
    enum:Object.values(authRoles),
    default:authRoles.USER
},
forgetPasswordToken:String,
forgetPasswordExpiry:Date

},{timestamps:true})

export default mongoose.model('User',userSchema)