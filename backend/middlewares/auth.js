import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
    const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login again !" });
        }
    try {
        const decode_token =  jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = decode_token.id;
        next();
    }
    catch (er) {
        console.log(er);
        res.json({success:false,message:er.message})

    }


}
export default auth;