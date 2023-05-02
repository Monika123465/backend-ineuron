import { Router } from "express";
import {createCollection,deleteCollection,updateCollection,getAllCollection}from "../controllers/collection.controller.js"
import { isLoggedIn,authorize} from "../middlewares/auth.middleware";
import AuthRoles from "../utils/authroles.js"

const router=Router()

router.post('/',isLoggedIn,authorize(AuthRoles.ADMIN),createCollection)
router.put('/:id',isLoggedIn,authorize(authorize.ADMIN),updateCollection)
router.delete('/:id',isLoggedIn,authorize(AuthRoles.ADMIN),deleteCollection)
router.get('/',getAllCollection)

export default router