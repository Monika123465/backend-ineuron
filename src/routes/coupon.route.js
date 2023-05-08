import { Router } from "express";
import { createCoupon, deleteCoupon, getAllCoupons, updateCoupon } from "../controllers/coupon.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";
import authRoles from "../utils/authroles.js";



const couponRoutes = Router()

couponRoutes.post("/", isLoggedIn, authorize(authRoles.ADMIN), createCoupon)

couponRoutes.delete("/:id", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), deleteCoupon)

couponRoutes.put("/action/:id", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), updateCoupon)

couponRoutes.get("/", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), getAllCoupons)

export default couponRoutes