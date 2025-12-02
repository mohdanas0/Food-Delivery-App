import express from "express"
import { addFood, foodList, removeFood } from "../controllers/FoodController.js"
import multer from "multer"


const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
   destination: "uploads",  //folder name 
   filename: (req, file, cb) => {
      return cb(null, `${Date.now()}${file.originalname}`) //timespan for unique image
   }
})

const upload = multer({ storage: storage })

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/food-list", foodList);
foodRouter.post("/remove", removeFood)



export default foodRouter;