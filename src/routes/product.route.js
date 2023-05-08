import { Router } from "express";
import { addPrdouct,getAllProducts,getProductById,getProductByCollectionId,deleteProduct } from "../controllers/product.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";

import authRoles from "../utils/authroles.js";



const productRoutes= Router()
//TOodo: add all routes here

productRoutes.post('/',isLoggedIn,authorize(authRoles.ADMIN),addPrdouct)

productRoutes.get('/:id',isLoggedIn,authorize(authRoles.ADMIN),getProductByCollectionId)
productRoutes.delete('/:id',isLoggedIn,authorize(authRoles.ADMIN),deleteProduct)
productRoutes.get('/',getAllProducts)
productRoutes.get('/:id',getProductById)
export default productRoutes;