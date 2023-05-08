import {Router} from "express"
import {getProfile,login,logout,signUp} from "../controllers/auth.controller.js"
import {isLoggedIn} from "../middlewares/auth.middleware.js"


const authRoutes =Router()

authRoutes.post("/signup", signUp)
authRoutes.post("/login", login)
authRoutes.get("/logout", logout)

authRoutes.get("/profile", isLoggedIn, getProfile)

export default authRoutes