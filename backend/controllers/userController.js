import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import UserModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)

}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't Exists !" })

        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, token: token })
        }
        else {
            return res.json({ success: false, message: "Invalid Credetials" })
        }


    }
    catch (err) {
        console.log(err);
        return res.json({ success: false, message: "Error Happend While User Login !" })


    }

}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //Checking User Existence
        const exists = await UserModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists !" });
        }
        //validating email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email !" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password !" })
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserModel({
            name, email, password: hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id);
        res.json({ success: true, token: token })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: "Error Happend While Registering User !" })

    }

}
const adminUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({ success: true, token: token })
        }
        else {
            return res.json({ success: false, message: "Unauthorized" })
        }
    }
    catch (err) {
        console.log(err);
        return res.json({ success: false, message: "Error in admin user Auth !" })
    }


}

export { loginUser, registerUser, adminUser };