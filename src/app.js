
import cors from "cors"
import cookieParser from "cookie-parser"
import express from 'express';
import routes from "./routes/index.js"


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

app.use("/api/v1/", routes)

app.all("*", (_req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
}) 



export default app