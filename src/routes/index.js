import { Router } from "express";
import {authRoutes,couponRoutes,collectionRoutes,productRoutes,orderRoutes} from "./auth.route.js"

const router = Router()
router.use("/auth", authRoutes)
router.use("/coupon", couponRoutes)
router.use("/collection", collectionRoutes)
router.use('/product',productRoutes)
router.use('/order',orderRoutes)




export default router