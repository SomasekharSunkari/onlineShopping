import UserModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    const { userId, itemId, size } = req.body;
    try {
        const userData = await UserModel.findById({ userId })
        let cartData = userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }

        await UserModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Added to Cart !" })
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message })
    }
}
const updateCart = async (req, res) => {
    try{
    const { userId, itemId, size,quantity } = req.body;
    const userData = await UserModel.findById({ userId })
    let cartData = userData.cartData;


    cartData[itemId][size] = quantity;
    await UserModel.findByIdAndUpdate(userId,{cartData});
    res.json({success:true,message:"Cart Updated !"})

    }

    catch(err){
        console.log(err);
        res.json({success:false,message:err.message})

    }
}
const getCartItems = async (req, res) => {
    try{
    const { userId} = req.body;
    const userData = await UserModel.findById({ userId })
    let cartData = userData.cartData;
    return res.json({success:true,cartData})
    }
    catch(er){
        console.log(er);
        return res.json({success:false,message:er.message});
    }
}


export { addToCart, updateCart, getCartItems };