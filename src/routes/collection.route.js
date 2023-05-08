import { Router } from "express";
import {createCollection,deleteCollection,updateCollection,getAllCollection}from "../controllers/collection.controller.js"
import { isLoggedIn,authorize} from "../middlewares/auth.middleware.js";
import authRoles from "../utils/authroles.js"

const collectionRoutes=Router()

collectionRoutes.post('/',isLoggedIn,authorize(authRoles.ADMIN),createCollection)
collectionRoutes.put('/:id',isLoggedIn,authorize(authRoles.ADMIN),updateCollection)
collectionRoutes.delete('/:id',isLoggedIn,authorize(authRoles.ADMIN),deleteCollection)
collectionRoutes.get('/',getAllCollection)

export default collectionRoutes