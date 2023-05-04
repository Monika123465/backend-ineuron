import { Router } from "express";
import { addPrdouct,getAllProducts,getProductById,getProductByCollectionId,deleteProduct } from "../controllers/product.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware";

import authRoles from "../utils/authroles.js";



const router = Router()
//TOodo: add all routes here

router.post('/',isLoggedIn,authorize(authRoles.ADMIN),addPrdouct)
router.post('/:id',isLoggedIn,authorize(authorize.ADMIN),generateRazorpayOrderId)
router.get('/:id',isLoggedIn,authorize(authRoles.ADMIN),getProductByCollectionId)
router.delete('/:id',isLoggedIn,authorize(authRoles.ADMIN),deleteProduct)
router.get('/',getAllProducts)
router.get('/:id',getProductById)
export default router;