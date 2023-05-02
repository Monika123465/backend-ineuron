import { Router } from "express";
import {authRoutes,couponRoutes,collectionRoutes} from "./auth.route.js"

const router = Router()
router.use("/auth", authRoutes)
router.use("/coupon", couponRoutes)
router.use("/collection", collectionRoutes)
router.use('/product',productRoutes)




export default router