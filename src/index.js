import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/database.js";

dotenv.config()

const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.error("MongoDB connection error : ", err)
    })



