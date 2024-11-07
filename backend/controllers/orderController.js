import e from "cors";
import Ordermodel from "../models/orderSchems";
import UserModel from "../models/userModel";

export const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethode: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new Ordermodel(orderData)
        await newOrder.save()

        await UserModel.findByIdAndUpdate(userId, { cartData: {} })

        return res.json({ success: true, message: "Order Placed!" })
    }
    catch (err) {
        console.log("Erro happend at place order !")
        return res.json({ success: false, message: err.message })

    }
}