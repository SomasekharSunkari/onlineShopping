import express from "express";
import cors from "cors"
import 'dotenv/config'
import connectMongo from "./configs/mongodb.js";
import cloudinaryConnect from "./configs/cloudinary.js";
import UserRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

const app = express()
const port = process.env.PORT  || 4000
connectMongo();
cloudinaryConnect();
app.use(express.json())
app.use(cors());

app.use("/api/user",UserRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter)
app.get("/",(req,res)=>{
    res.json("API WORKING ")
})

app.listen(port,()=>{
    console.log(`Application Runnning on port ${port}`)
})