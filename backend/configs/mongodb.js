import mongoose from "mongoose";

const connectMongo = async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("Database Connected Succesfully !")
    })
    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)
}

export default connectMongo;