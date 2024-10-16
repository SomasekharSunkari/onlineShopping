import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller, date } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const images = [image1, image2, image3, image4].filter(item => item !== undefined);
        let imageurls = await Promise.all(images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
            return result.secure_url;
        })
        )
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,
            date: Date.now(),
            images: imageurls
        }
        const newProduct = new productModel(productData);
        await newProduct.save();
        return res.json({ success: true, message: "Product uploaded Successfully !" })
    }
    catch (Err) {
        console.log(Err)
        res.json({ succes: false, message: "Error in adding a product !" })
    }


}
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,products})

    }
    catch (err) {
        console.log(err);
        return res.json({success:false,message:"Error in listing products !"})

    }


}
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id);
        return res.json({ success: true, message: "Product Removed" })
    }
    catch (err) {
        console.log(err)
        return res.json({ succes: false, message: "Error in Product Removing !" })

    }

}
const singleProduct = async (req, res) => {
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true,product})

    }
    catch(err){
        console.log(err);
        return res.json({success:false,message:err.message})

    }

}

export { addProduct, listProducts, removeProduct, singleProduct }
