import express from "express";
import { addToCart, updateCart, getCartItems } from "../controllers/cartController.js";
import auth from "../middlewares/auth.js";
const cartRouter = express.Router();

cartRouter.post("/addtocart", auth, addToCart);
cartRouter.post("/updateCart", auth, updateCart);
cartRouter.post("/getCart", auth, getCartItems);
export default cartRouter;