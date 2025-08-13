import express from "express";
import cors from "cors"
const app = express();

//basic congfigs (middleware)
app.use(express.json)
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

//cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || "http://localhost:5173",
    credemtials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.get('/', (req, res) => {
    res.send("Welcome to my server")
})

export default app