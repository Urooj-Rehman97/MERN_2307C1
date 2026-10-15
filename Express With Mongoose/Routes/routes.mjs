import express from  'express';
import { createUser, deleteUser, getAll, getById, updateUser } from '../Controllers/userController.mjs';

const UserRouter = express.Router()

UserRouter.post("/insert", createUser)
UserRouter.get("/fetch", getAll)
UserRouter.get("/getById/:id", getById)
UserRouter.put("/update/:id", updateUser)
UserRouter.delete("/delete/:id", deleteUser)

export default UserRouter