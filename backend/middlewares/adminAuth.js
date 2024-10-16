import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token){
            return res.json({success:false,message:"Not authorized Login Again to Continue !"})
        }

        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
        {
            return res.json({success:false,message:"Not Authorised Login again to continue !"})
        }
        next();

    }
    catch (err) {
        console.log(err);
        return res.json({success:false,message:"Error happend in Admin Auth middleware !"})

    }

}
export default adminAuth;