import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mohdanasgour7866_db_user:anasgour78@foodappapis.gpbcouw.mongodb.net/?retryWrites=true&w=majority&appName=FoodAppApis")
        .then(() => {
            console.log("Database is connected")
        }
    )
}

