import express from "express";
import { loginUser,adminUser,registerUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/register",registerUser);
UserRouter.post("/login",loginUser);
UserRouter.post("/admin",adminUser);

export default UserRouter;