import { Router } from "express";
import {createCollection,deleteCollection,updateCollection,getAllCollection}from "../controllers/collection.controller.js"
import { isLoggedIn,authorize} from "../middlewares/auth.middleware";
import authRoles from "../utils/authroles.js"

const router=Router()

router.post('/',isLoggedIn,authorize(authRoles.ADMIN),createCollection)
router.put('/:id',isLoggedIn,authorize(authRoles.ADMIN),updateCollection)
router.delete('/:id',isLoggedIn,authorize(authRoles.ADMIN),deleteCollection)
router.get('/',getAllCollection)

export default router