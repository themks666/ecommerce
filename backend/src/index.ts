import express from "express"
import cors from "cors"
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(clerkMiddleware())
app.use(cors({origin: ENV.FRONTEND_URL}))

app.listen(ENV.port, ()=>{console.log("Server is runnning on http://localhost:3000")})