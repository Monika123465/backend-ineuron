import { Router } from "express";
import { generateOrder, generateRazorpayOrderId, getAllOrders, getMyOrders, updateOrderStatus } from "../controllers/order.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware";
import authRoles from "../utils/authroles.js";



const router = Router()
//TOodo: add all routes here

router.post('/',isLoggedIn,authorize(authRoles.ADMIN),generateOrder)
router.post('/:id',isLoggedIn,authorize(authorize.ADMIN),generateRazorpayOrderId)

router.get('/',isLoggedIn,authorize(authRoles.ADMIN),getAllOrders)
router.get('/:id',getMyOrders)
export default router;