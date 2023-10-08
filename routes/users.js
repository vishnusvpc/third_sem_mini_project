import express from 'express'
import { deleteUser,getAllUser,getSingleUser,updateUser } from '../controllers/userController.js'
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// update user
router.put("/:id",verifyUser,updateUser);
// delete user
router.delete("/:id",deleteUser);
// get single user
router.get("/:id",verifyUser,getSingleUser);
// get all user
router.get("/",getAllUser);

export default router