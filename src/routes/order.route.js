import { Router } from "express";
import { generateOrder, generateRazorpayOrderId, getAllOrders, getMyOrders, updateOrderStatus } from "../controllers/order.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";
import authRoles from "../utils/authroles.js";



const orderRoutes = Router()
//TOodo: add all routes here

orderRoutes.post('/',isLoggedIn,authorize(authRoles.ADMIN),generateOrder)
orderRoutes.post('/:id',isLoggedIn,authorize(authorize.ADMIN),generateRazorpayOrderId)
orderRoutes.get('/',isLoggedIn,authorize(authRoles.ADMIN),getAllOrders)
orderRoutes.get('/:id',getMyOrders)
export default orderRoutes;