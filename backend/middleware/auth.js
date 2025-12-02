import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    //get token from req.header
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }
    try {
        //verify req token with our secret key and decode it 
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Error" })

    }
}

export default authMiddleware;