import { Router } from "express";
import { createCoupon, deleteCoupon, getAllCoupons, updateCoupon } from "../controllers/coupon.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware";
import authRoles from "../utils/authroles.js";



const router = Router()

router.post("/", isLoggedIn, authorize(authRoles.ADMIN), createCoupon)

router.delete("/:id", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), deleteCoupon)

router.put("/action/:id", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), updateCoupon)

router.get("/", isLoggedIn, authorize(authRoles.ADMIN, authRoles.MODERATOR), getAllCoupons)

export default router;