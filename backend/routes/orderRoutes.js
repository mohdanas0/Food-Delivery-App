import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();


orderRouter.use("/place", authMiddleware, placeOrder)

export default orderRouter;